# Redis-常见的阻塞原因

## O(N)命令

Redis 常见的命令执行速度都很快，算法复杂度基本都在 O(1) 级别，但是也有一些算法复杂度在 O(n) 级别，再加上数据量过大的情况，就会导致很慢，比如

- hash 结构的 hgetall 命令
- `keys *`命令

排查：

- 获取慢查询：Redis 提供了`slowlog get {n}`命令来获取最近的 n 条慢查询命令，默认会将执行超过10ms的命令记录到队列当中，
- 可以通过`info commandstats`命令来分析命令的不同执行时间，可以通过查看字段 usec_per_call 平均耗时来排查，单位是微秒

```bash
> info commandstats
# Commandstats
cmdstat_zadd:calls=5,usec=2365,usec_per_call=473.00,rejected_calls=0,failed_calls=0
cmdstat_zrevrange:calls=8,usec=1884,usec_per_call=235.50,rejected_calls=0,failed_calls=0
cmdstat_multi:calls=2,usec=12,usec_per_call=6.00,rejected_calls=0,failed_calls=0
cmdstat_info:calls=4,usec=13397,usec_per_call=3349.25,rejected_calls=0,failed_calls=0
cmdstat_ttl:calls=8,usec=987,usec_per_call=123.38,rejected_calls=0,failed_calls=0
```

- 单个 key 当中存储了过大的数据，执行命令会阻塞当前主线程，排查发现大对象：

  - Redis 提供了命令`redis-cli -h host -p port bigkeys` 来查询大对象，

  - 内部采用分段 scan 操作，把历史扫描过的大对象统计出来返回


## 持久化阻塞

持久化引起的阻塞的常见原因有：

- fork 阻塞
- aof 刷盘阻塞
- huge page 阻塞

### fork阻塞

- 在之前的 Redis 持久化文档当中，Redis 持久化有两种：rdb 和 aof 
- rdb 持久化会 fork 主线程来进行数据的备份，如果 fork 操作时间过长，肯定会导致主线程的阻塞，可以执行`info stats`命令返回的`latest_fork_usec`参数来优化
- aof 持久化也会 fork 主线程来进行数据备份，如果配置`appendonlyfsync everysec`会每秒对 aof 文件执行 fsync 操作，如果磁盘压力过大， Redis 发现上次执行 fsync 的时间过长，为了安全会阻塞后台线程 fsync 直到完成。可以通过`info persistence`命令返回当中的`aof_delayed_fsync`指标来优化解决。

# cpu竞争

Redis 是典型的 cpu 密集型应用，不建议和其他多核 cpu 密集型服务部署在一起。

排查：

- 可以通过`top`命令来查看不同进程使用cpu情况
- 通过`redis-cli --stat`查看当前redis的使用情况

## swap交换

先介绍一下 SWAP 技术，SWAP 是 Linux 下的虚拟内存分区，它的作用是物理内存使用完之后，将磁盘空间也就是 SWAP 分区虚拟化成内存使用

Redis 速度为什么这么快有一个原因就是 Redis 是一个基于内存的数据库，相比较于内存，磁盘的执行速度要慢上很多的

排查：

- 查询 Redis 进程号，执行`redis-cli -p port info server | grep process_id`查看进程ID，
- 根据进程号查询内存交换信息，执行`cat /proc/process_id/smaps | grep Swap`，如果交换量都是0KB 或者个别的是 4KB，则是正常现象，说明 Redis 进程内存没有被交换
- 执行`info memory`命令结果集当中`mem_fragmentation_ration<1`时，这种情况就是操作系统将redis内存交换到磁盘导致

预防内存交换：

- 保证机器充足的可用内存
- 确保所有 Redis 实例设置最大可用内存，设置 maxmemory 参数，防止极端情况下 Redis 内存不可控的增长
- 降低系统使用 swap 优先级

## 网络问题

连接拒绝，网络延迟，网卡软中断等等

## 参考

- Redis开发与运维