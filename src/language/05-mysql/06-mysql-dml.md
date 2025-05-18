---
category:
  - MySql
tag:
  - MySql
---
# MySql-DML语句

## DDL语言

- 说明：

  - Data Define Language数据定义语言,用于对数据库和表的管理和操作

- 库的管理-

  - 创建数据库

  ```sql
  CREATE DATABASE stuDB;
  CREATE DATABASE IF NOT EXISTS stuDB;
  ```

  - 删除数据库

  ```sql
  DROP DATABASE stuDB;
  
  DROP DATABASE IF EXISTS stuDB;
  ```

- 表的管理

  - 创建表

    - 语法：

    ```sql
    CREATE TABLE [IF NOT EXISTS] 表名(
        字段名  字段类型  【字段约束】,
        字段名  字段类型  【字段约束】,
        字段名  字段类型  【字段约束】,
        字段名  字段类型  【字段约束】,
        字段名  字段类型  【字段约束】
    );
    ```
  
  - 案例：没有添加约束
  
  ```sql
  CREATE TABLE IF NOT EXISTS stuinfo(
      stuid INT ,
      stuname VARCHAR(20),
      stugender CHAR(1),
      email VARCHAR(20),
      borndate DATETIME
  );
  ```

  - 案例：添加约束

  ```sql
  DROP TABLE IF EXISTS stuinfo;
  CREATE TABLE IF NOT EXISTS stuinfo(
      stuid INT PRIMARY KEY,#添加了主键约束
      stuname VARCHAR(20) UNIQUE NOT NULL,#添加了唯一约束+非空
      stugender CHAR(1) DEFAULT '男',#添加了默认约束
      email VARCHAR(20) NOT NULL,
      age INT CHECK( age BETWEEN 0 AND 100),#添加了检查约束，mysql不支持
      majorid INT,
      CONSTRAINT fk_stuinfo_major FOREIGN KEY (majorid) REFERENCES major(id)#添加了外键约束
  );
  ```
  
- 数据类型：

  - 整型
    - TINYINT SMALLINT  INT  BIGINT 
  - 浮点型
    - FLOAT(m,n)
    - DOUBLE(m,n) 
    - DECIMAL(m,n)
    - m和n可选
  - 字符型
    - CHAR(n):n可选
    - VARCHAR(n)：n必选
    - TEXT
    - n表示最多字符个数
  - 日期型
    - DATE TIME  DATETIME TIMESTAMP
  - 二进制型
    - BLOB 存储图片数据

## 常见约束

- 说明：

  - 用于限制表中字段的数据的，从而进一步保证数据表的数据是一致的、准确的、可靠的！
  - NOT NULL 非空：用于限制该字段为必填项
  - DEFAULT 默认：用于限制该字段没有显式插入值，则直接显式默认值
  - PRIMARY KEY 主键：用于限制该字段值不能重复，设置为主键列的字段默认不能为空，一个表只能有一个主键，当然可以是组合主键
  - UNIQUE 唯一：用于限制该字段值不能重复，字段是否可以为空      一个表可以有几个

  ```sql
  主键 ×           1个
  唯一    √             n个
  ```

  - CHECK检查：用于限制该字段值必须满足指定条件，例如：CHECK(age BETWEEN 1 AND 100)
  - FOREIGN KEY 外键:用于限制两个表的关系,要求外键列的值必须来自于主表的关联列
        要求：    
    - ①主表的关联列和从表的关联列的类型必须一致，意思一样，名称无要求
    - ②主表的关联列要求必须是主键

### 修改表

- 语法

```sql
ALTER TABLE 表名 ADD|MODIFY|CHANGE|DROP COLUMN 字段名 字段类型 【字段约束】;
```

- 修改表名

```sql
ALTER TABLE stuinfo RENAME TO students;
```

- 添加字段

```sql
ALTER TABLE students ADD COLUMN borndate TIMESTAMP NOT NULL;

DESC students;
```

- 修改字段名

```sql
ALTER TABLE students CHANGE COLUMN borndate birthday DATETIME NULL;
```

- 修改字段类型

```sql
ALTER TABLE students MODIFY COLUMN birthday TIMESTAMP ;
```

- 删除字段

```sql
ALTER TABLE students DROP COLUMN birthday;

DESC students;
```

### 删除表

```sql
DROP TABLE IF EXISTS students;
```

### 复制表

- 仅仅复制表的结构

```sql
CREATE TABLE newTable2 LIKE major;
```

- 复制表的结构+数据

```sql
CREATE TABLE newTable3 SELECT * FROM girls.`beauty`;
```

- 复制employees表中的last_name,department_id,salary字段到新表 emp表，但不复制数据

```sql
CREATE TABLE emp 
SELECT last_name,department_id,salary 
FROM myemployees.`employees`
WHERE 1=2;
```

## DML语言

- 数据操作语言：

  - 插入：insert
  - 修改：update
  - 删除：delete

- 插入语句

  - 方式一：经典的插入

```sql
语法：insert into 表名(列名,...) values(值1,...);
```

  - 方式二：

    - 语法：insert into 表名 set 列名=值,列名=值,...
```sql
INSERT INTO beauty      SET id=19,NAME='刘涛',phone='999';
```

  - 对比：

    - 方式一支持插入多行,方式二不支持

```sql
INSERT INTO beauty
VALUES(23,'唐艺昕1','女','1990-4-23','1898888888',NULL,2)
,(24,'唐艺昕2','女','1990-4-23','1898888888',NULL,2)
,(25,'唐艺昕3','女','1990-4-23','1898888888',NULL,2);
```

    - 方式一支持子查询，方式二不支持

```sql
INSERT INTO beauty(id,NAME,phone)
SELECT 26,'宋茜','11809866';

INSERT INTO beauty(id,NAME,phone)
SELECT id,boyname,'1234567'
FROM boys WHERE id<3;
```

### 示例

- 插入的值的类型要与列的类型一致或兼容

```sql
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);
```

- 不可以为null的列必须插入值。可以为null的列如何插入值？

  - 方式一：

```sql
  INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
  VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);
```

  - 方式二：

  ```sql
  INSERT INTO beauty(id,NAME,sex,phone)
  VALUES(15,'娜扎','女','1388888888');
  ```

- 列的顺序是否可以调换

```sql
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('蒋欣','女',16,'110');
```

- 列数和值的个数必须一致

```sql
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('关晓彤','女',17,'110');
```

- 可以省略列名，默认所有列，而且列的顺序和表中列的顺序一致

```sql
INSERT INTO beauty
VALUES(18,'张飞','男',NULL,'119',NULL,NULL);
```

### 修改语句

- 修改单表的记录★
  - 语法：
    update 表名
    set 列=新值,列=新值,...
    where 筛选条件;
  
- 修改多表的记录【补充】语法：
  - sql92语法：
    update 表1 别名,表2 别名
    set 列=值,...
    where 连接条件
    and 筛选条件;
  - sql99语法：
    update 表1 别名
    inner|left|right join 表2 别名
    on 连接条件
    set 列=值,...
    where 筛选条件;

- 修改单表的记录

  - 修改beauty表中姓唐的女神的电话为13899888899

```sql
  UPDATE beauty SET phone = '13899888899'
  WHERE NAME LIKE '唐%';
```

- 修改多表的记录

  - 修改张无忌的女朋友的手机号为114

  ```sql
  UPDATE boys bo
  INNER JOIN beauty b ON bo.`id`=b.`boyfriend_id`
  SET b.`phone`='119',bo.`userCP`=1000
  WHERE bo.`boyName`='张无忌';
  ```

  - 修改没有男朋友的女神的男朋友编号都为2号

```sql
  UPDATE boys bo
  RIGHT JOIN beauty b ON bo.`id`=b.`boyfriend_id`
  SET b.`boyfriend_id`=2
  WHERE bo.`id` IS NULL;
  
  SELECT * FROM boys;
```


### 删除语句

- 方式一：delete

  - 单表的删除【★】

    - delete from 表名 where 筛选条件

  - 多表的删除【补充】

    - sql92语法：
    
    ```
    delete 表1的别名,表2的别名
        from 表1 别名,表2 别名
        where 连接条件
        and 筛选条件;
    ```
    
    - sql99语法：

 ```sql
 delete 表1的别名,表2的别名
      from 表1 别名
      inner|left|right join 表2 别名 on 连接条件
      where 筛选条件;
 ```
- 方式二：truncate

  - 语法：truncate table 表名

- delete pk truncate

  - delete 可以加where 条件，truncate不能加
  - truncate删除，效率高一丢丢
  - 假如要删除的表中有自增长列，如果用delete删除后，再插入数据，自增长列的值从断点开始，而truncate删除后，再插入数据，自增长列的值从1开始。
  - truncate删除没有返回值，delete删除有返回值
  - truncate删除不能回滚，delete删除可以回滚.

### 示例

- #1.单表的删除     删除张无忌的女朋友的信息

```sql
DELETE FROM beauty WHERE phone LIKE '%9';
SELECT * FROM beauty;
```

- 多表的删除 - 删除张无忌的女朋友的信息

```sql
DELETE b
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id` = bo.`id`
WHERE bo.`boyName`='张无忌';
```

- 删除黄晓明的信息以及他女朋友的信息

```sql
DELETE b,bo
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id`=bo.`id`
WHERE bo.`boyName`='黄晓明';
```



