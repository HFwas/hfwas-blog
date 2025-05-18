# MySql-日志

## redo log

### 结构

- redo log日志结构如下图所示：

![image-20250518182237011](images/image-20250518182237011.png)

- 字段含义：
  - type：该条 redo log 的类型
  - space id：表空间ID
  - page number：页号
  - data：该条 redo log的数据

## undo log

## bin log

## slow log