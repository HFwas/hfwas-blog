# Mysql操作-开启binlog

- 修改mysql配置文件，增加配置

```
server_id=2
log_bin = mysql-bin
```

- 重启服务，执行`kubectl -n 命名空间 delete pod pod名称`
- 需要同时添加server-id参数，不然会报错如下图：

![image-20240905232909178](images/image-20240905232909178.png)

- 验证：进入容器内部，查看mysql-bin位置和文件，发现已经有文件了

![image-20240905233052696](images/image-20240905233052696.png)

- 重启服务

