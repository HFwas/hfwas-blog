# Redis-集群

## 数据复制

- 数据流向：由master像slave节点流动，可以执行`info replication`查看复制状态
- 执行时机：
  - 配置文件当中添加`--slaveof masterip masterport`
  - 手动执行`slaveof masterip masterport`
- 

