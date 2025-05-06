# Redis-三种复杂数据结构

- Bitmap：位图
- HyperLogLog：基数统计
- GEO：地理信息定位

## Bitmap

参考官网的介绍：

> Bitmaps are not an actual data type, but a set of bit-oriented operations defined on the String type which is treated like a bit vector. Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits.
>
> You can perform bitwise operations on one or more strings. Some examples of bitmap use cases include:
>
> - Efficient set representations for cases where the members of a set correspond to the integers 0-N.
> - Object permissions, where each bit represents a particular permission, similar to the way that file systems store permissions.

位图不是一种实际的数据类型，而是在String类型上定义的一组面向位的操作，它被视为位向量。由于字符串是二进制安全的blob，其最大长度为512 MB，因此它们适合设置最多2^32个不同的位。您可以对一个或多个字符串执行按位操作。

Bitmap是一个特殊的String类型，可以对其设置对应offset位置值为value，但是Bitmap的value存储的是二进制位，只有0或者1。

我们知道一个byte字节占用8个bit位，Bitmap当中的value只使用了一个bit位，这样可以极大的节省存储空间。

![](images/image-20250504195210883.png)

### 常用命令

| 命令                    | 介绍                              |
| ----------------------- | --------------------------------- |
| setbit key offset value | 设置key在offset位置值为value      |
| getbit key offset       | 获取key在offset的值               |
| bitcount key start end  | 获取key在start 到end范围为1的个数 |

### 实际操作

```bash
> setbit sign-bitmap-20250504 2 1
0
> setbit sign-bitmap-20250504 5 1
0
> getbit sign-bitmap-20250504 2
1
```

### 应用场景

- 网站上用户当天是否签到，是否分享视频文章，这种是否状态的信息就很适合使用Bitmap来存储

## HyperLogLog

参考官网介绍：

> The [Redis HyperLogLog](https://redis.io/docs/latest/develop/data-types/probabilistic/hyperloglogs/) data structures provide probabilistic estimates of the cardinality (i.e., number of elements) of large sets.

Redis HyperLogLog数据结构提供了大集合的基数（即元素数量）的概率估计，是一种概率数据结构，用于估计集合的基数。

作为一种概率数据结构，HyperLogLog以完美的准确性换取有效的空间利用。Redis HyperLogLog实现最多使用12 KB，标准误差为0.81%，可以以极小的内存空间完成独立总数的统计

### 常用命令

| 命令                      | 介绍                             |
| ------------------------- | -------------------------------- |
| PFADD key value           | HyperLog当中key添加value         |
| PFCOUNT key               | 统计HyperLog当中key对应value数量 |
| PFMERGE key value1 value2 |                                  |

## 实际操作

```bash
> PFADD key-hyperloglog v1
1
> PFADD key-hyperloglog v2
1
> PFADD key-hyperloglog v3
1
> PFADD key-hyperloglog v4
1
> PFCOUNT key-hyperloglog
4
> PFMERGE key-hyperloglog v3 v4
OK
> PFCOUNT key-hyperloglog
4
```

### 应用场景

- 可以容许数据有部分差异的，
- 流量很高的网站统计独立访客/每天请求数等等

## GEO

GEO是一种支持存储和查询地理信息位置的数据结构，基于sorted set实现，

### 常用命令

| 命令                                 | 介绍                                            |
| ------------------------------------ | ----------------------------------------------- |
| geoadd key longitude latitude member | 将地理位置（经度，纬度，位置名称）添加到key当中 |
| geosearch                            | 查询地址位置附近数量                            |

### 应用场景

- 涉及地理位置搜索，分析，展示。
- 实现附近的人
- 当前位置附近多少商家
- 当前区域人数等等
