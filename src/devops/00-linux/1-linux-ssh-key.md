# Linux-SSH key

经常使用的有三种非对称加密算法，分别是：RSA、ECDSA、Ed25519

## 生成密钥对

如果不指定算法，默认是rsa算法：

```bash
# -t 指定算法为 rsa，-b 指定密钥长度 4096 位
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

生成ecdsa算法密钥：

```bash
# -b 指定椭圆曲线长度（256/384/521 位，推荐 256）
ssh-keygen -t ecdsa -b 256 -C "your_email@example.com"
```

生成ed25519算法密钥：

```bash
# Ed25519 无需指定密钥长度（固定 256 位）
ssh-keygen -t ed25519 -C "your_email@example.com"
```

上传密钥到服务器

```bash
# 上传 RSA 公钥到服务器
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.100
```

## Ssh-config配置

在～/.ssh/config当中配置

```bash
# 使用 Ed25519 密钥登录 server1
Host server1
    HostName 192.168.1.100
    User root
    Port 22
    IdentityFile ~/.ssh/id_ed25519  # 指定 Ed25519 私钥

# 使用 RSA 密钥登录老旧服务器（兼容性优先）
Host old-server
    HostName 192.168.1.200
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa  # 指定 RSA 私钥
```

后续可以使用以下方法连接服务器，避免手动输入密码：

```bash
ssh server1
ssh old-server
```

