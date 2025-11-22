# Nexus-支持https加域名访问

镜像地址：docker.xuanyuan.run/sonatype/nexus3:latest

Nexus版本：

本地host映射：

```bash
127.0.0.1    nexus.hfwas.devops.com
```

生成openssl证书：

```bash
# 生成私钥（nexus.key）和自签名证书（nexus.crt），有效期365天
openssl req -newkey rsa:4096 -nodes -sha256 -keyout nexus.hfwas.devops.com.key -x509 -days 365 -out nexus.hfwas.devops.com.crt
```

交互填写：

```
```

docker启动nexus：

```bash
docker run -d   --name nexus --restart always -p 8446:8443   -p 8081:8081 -v "$dataDir:/nexus-data" -v "$certDir:/etc/nexus/certs"  -e TZ="Asia/Shanghai" -e NEXUS_CONTEXT="/"  -e INSTALL4J_ADD_VM_PARAMS="-Djavax.net.ssl.keyStore=/etc/nexus/certs/nexus.hfwas.devops.com.key -Djavax.net.ssl.keyStoreCertificate=/etc/nexus/certs/nexus.hfwas.devops.com.crt -Dnexus-args='-Djetty.https.port=8443 -Djetty.https.keystore=/etc/nexus/certs/nexus.hfwas.devops.com.key -Djetty.https.trustStore=/etc/nexus/certs/nexus.hfwas.devops.com.crt'" --shm-size 2g docker.xuanyuan.run/sonatype/nexus3:latest
```

关键参数：

- `NEXUS_CONTEXT`:
- `INSTALL4J_ADD_VM_PARAMS`: