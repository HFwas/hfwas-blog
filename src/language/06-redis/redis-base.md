# Redis-实战知识

## Memcached和redis比较

相同点：

- 都是基于内存的内存数据库
- 性能很好

不同点

|          | redis                                                        | Memchached                   |
| -------- | ------------------------------------------------------------ | ---------------------------- |
| 数据类型 | 提供了string,list,set,sorted set, hash,bitmap,hyper,geo等类型 | 捡                           |
| 命令     | 每种数据类型都提供了对应的命令                               | 创建，删除，读取，更新等命令 |
| 附加功能 | 发布订阅，stream，持久化等                                   |                              |

## Redis事务

redis提供了将一组需要执行的命令放到两个命令之间的，打包的命令执行是原子顺序执行的，例如：

```bash
> set key1 values1
OK
> multi
OK
> set key2 valu2
QUEUED
> get key2
QUEUED
> exec
OK
valu2
> get key2
valu2
```









## 参考

- Redis实战