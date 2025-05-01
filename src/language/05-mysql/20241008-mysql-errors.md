# MySql常见错误

# Variable ‘time_zone‘ can‘t be set to the value of ‘NULL‘

- 在sql结尾当中有这样的，将之移除掉

```
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
```

## incorrect datetime value for column

- 在sql开头添加

```
SET SESSION SQL_MODE='ALLOW_INVALID_DATES'
```

- 

参考链接

- https://stackoverflow.com/questions/22806870/incorrect-datetime-value-database-error-number-1292

## Variable 'character_set_client' can't be set to the value of 'NULL'

- sql文件当中如下：

```
/*!40101 SET character_set_client = @saved_cs_client */;
```

- 修改如下：

```
/*!40101 SET character_set_client = 'utf8' */;
```

## ERROR 2006 （HY000）：MySQL server has gone away”

- 执行`show global variables like 'max_allowed_packet';`查看包大小
- 执行`set global max_allowed_packet=1024*1024*16;`将值修改大
- 亲测有效

