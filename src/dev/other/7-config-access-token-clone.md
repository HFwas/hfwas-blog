# 代码克隆 - 配置 access-token 克隆代码

- 以 gitlab 为例
- 点击个人中心，生成 access-token

![image-20250714220852067](./images/image-20250714220852067.png)

- 本地克隆代码执行`git clone https://oauth2:access-token@x.x.x.x/xx/xxx.git`
- 报错如下图，执行：`git config --system http.sslbackend openssl`

![img](./images/1752220839857-eda43feb-b594-4a24-a0fa-4224cf79d99d.png)

- 报错如下图，执行`git config --global http.sslVerify false`

![img](./images/1752220839829-7aff6795-7bfa-4c8e-ae34-6a5d235c6cbd.png)

- 为了避免每次克隆代码都要手动拼接`oauth2:access-token`格式，本地执行以下命令，后续直接使用 http 链接克隆即可，会自动转换成 access-token格式。

```bash
git config --global url."https://oauth2:access-token@xx.xx.xx.xx".insteadof "https://xx.xx.xx.xx"
```

