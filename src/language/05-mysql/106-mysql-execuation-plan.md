# MySql-执行计划

MySql给我们提供了 explain 命令来分析 Sql 语句的性能，

## 分析步骤

获取需要分析执行计划的 Sql 语句，加 expalin 命令，格式`explain sql语句`，会得到以下的结果：

```sql
mysql> explain select * from users; 
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | type  | possible_keys | key          | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | users | NULL       | index | NULL          | idx_username | 259     | NULL |    1 |   100.00 | Using index |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+-------------+
1 row in set, 1 warning (0.00 sec)

mysql> 
```

explain 返回的结果有12列，分别是：

| id   | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
| ---- | ----------- | ----- | ---------- | ---- | ------------- | ---- | ------- | ---- | ---- | -------- | ----- |

## explain 结果

### id

- 

### select_type

| 值           | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| SIMPLE       | 简单的SELECT语句（不包括UNION操作或子查询操作）              |
| PRIMARY      | 查询中最外层的SELECT（如两表做UNION或者存在子查询的外层的表操作为PRIMARY，内层的操作为UNION |
| UNION        | UNION操作中，查询中处于内层的SELECT，即被union的SELECT       |
| SUBQUERY     | 子查询中的SELECT                                             |
| DERIVED      | 表示包含在 From 子句中的 Select 查询                         |
| UNION RESULT | union的结果,此时id为NULL                                     |



### table

- 涉及的表

### partitions



### type

| 值     | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| system | 表只有一行，MyISAM引擎所有                                   |
| const  | 常量连接，表最多只有一行匹配，通常用于主键或者唯一索引比较时, |
| eq_ref | 表关联查询时，对于前表的每一行,后表只有一行与之匹配。(1) join查询(2) 命中主键或者非空唯一索引 |
| ref    | 只使用了索引的最左前缀或者使用的索引是非唯一索引、非主键索引 |
| range  | between，in，>等都是典型的范围(range)查询                    |
| index  | 需要扫描索引上的全部数据                                     |
| all    | 全表扫描                                                     |

### possible_keys



### key



### key_len



### ref



### rows

- 结果集的行数

### filtered



### Extra

| 值                    | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| Using index           | select后面的查询字段在索引中就可以取到,无需再回表了,即所谓的覆盖索引,这种查询性能很好 |
| Using filesort        | 当order by 无法利用索引完成排序时,优化器不得不选择合适的算法从内存或者磁盘进行排序 |
| Using temporary       | 使用了临时表                                                 |
| Using index condition | mysql5.6之后引入了ICP(索引条件下推)                          |
| Using where           | Mysql 服务器在存储引擎检索行后再进行过滤                     |

## 优化策略
