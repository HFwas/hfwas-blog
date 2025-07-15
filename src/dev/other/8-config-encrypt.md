# 配置文件 - 加密

- 这里介绍两种我熟悉的配置文件当中敏感字段加密的方式，分别是：
  - Jasypt 
  - druid 
- 我们开发过程当中有一些敏感字段不希望直接暴露出去，比如数据库账号密码，三方对接的ak/sk，公有云申请的ak/sk等等，这些内容都是需要做二次加密为了防止窃取和丢失，以及数据安全

## jasypt

- 引入依赖

```java
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot</artifactId>
    <version>${jasypt.version}</version>
</dependency>
```

- 新建工具类

```java

```

- 加密敏感配置，更新配置文件
- 将 jasypt password 密钥配置在启动变量当中，不要写死在代码当中

```bash

```


## druid

- 下载 druid-x.jar 包，本地运行，生成公钥和私钥，
- 通过公钥加密敏感字段内容，