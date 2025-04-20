# Redis持久化

redis持久化有三种：

- RDB快照
- AOF追加文件
- RDB+AOF混合模式

## 数据存储

持久化存储的数据位置可以通过dir参数来设置，

```bash
dir /data
```

以开发环境为例，Redis 7.0版本开启了RDB+AOF混合存储的持久化方式

```bash
# pwd
/data
#
# ls -lah
total 2.7M
drwxr-xr-x 4 root root 4.0K Apr 10 06:06 .
drwxr-xr-x 1 root root   36 Mar 20 13:17 ..
drwxr-xr-x 2 root root 4.0K Apr 10 04:18 appendonlydir
-rw-r--r-- 1 root root 2.6M Apr 10 06:06 dump.rdb
drwx------ 2 root root  16K Sep  4  2023 lost+found
# cd appendonlydir
# ls -lah
total 50M
drwxr-xr-x 2 root root 4.0K Apr 10 04:18 .
drwxr-xr-x 4 root root 4.0K Apr 10 06:06 ..
-rw-r--r-- 1 root root 2.3M Apr 10 04:18 appendonly.aof.3075.base.rdb
-rw-r--r-- 1 root root  47M Apr 10 06:10 appendonly.aof.3075.incr.aof
-rw-r--r-- 1 root root  100 Apr 10 04:18 appendonly.aof.manifest
```

## RDB持久化

RDB是指某一个时间dump当前内存存储的数据落到磁盘保存下来，后续恢复数据可以以某一个时间为基准的所有数据。redis配置当中有

```yaml
save 900 1 #在900秒之后，如果有一个key发生变化，执行bgsave命令创建快照
save 300 10 #在300秒之后，如果有10个key发生变化，执行bgsave命令创建快照
save 60 10000 #在60秒之后，如果有1000个key发生变化，执行bgsave命令创建快照
```

### 创建快照方式

- save命令：同步执行，会阻塞主线程，影响其他客户端发起的请求，会对线上环境造成影响
- bgsave命令：异步执行，执行bgsave命令之后，redis客户端会立即返回，redis会fork一个新的线程，原来的redis主线程会继续处理来自客户端的请求，子线程异步执行备份

```
127.0.0.1:6379>
127.0.0.1:6379> bgsave
Background saving started
```

## AOF持久化

AOF全称叫append only file，相比RDB，AOF的持久化的时效性比较好，在Redis 7.0 版本，AOF是默认开启的，其他版本可以通过配置手动开启，增加配置：

```bash
appendonly yes
```

AOF是将Redis客户端的每一条请求都