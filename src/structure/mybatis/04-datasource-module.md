---
icon: pen-to-square
date: 2024-04-15
order: 5
category:
  - mybatis
tag:
  - mybatis
---

# Mybatis-数据源模块

- 

## 模块详情

![image-20240505152256405](images/image-20240505152256405.png)

## 类DataSourceFactory

```
public interface DataSourceFactory {
  /**
   * 设置DataSource相关的属性
   * @param props
   */
  void setProperties(Properties props);

  /**
   * 获取 DataSource 相关的设置
   * @return
   */
  DataSource getDataSource();

}
```

### 非池化UnpooledDataSourceFactory



### 池化PooledDataSourceFactory



