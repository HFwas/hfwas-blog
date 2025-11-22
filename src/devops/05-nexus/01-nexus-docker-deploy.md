---
category:
  - nexus
tag:
  - nexus
---
#  Nexus-docker启动

镜像地址：docker.xuanyuan.run/sonatype/nexus3:latest

Nexus版本：

docker启动nexus：

```bash
docker run -d   --name nexus --restart always -p 8446:8443   -p 8081:8081 -v "$dataDir:/nexus-data" -v "$certDir:/etc/nexus/certs"  -e TZ="Asia/Shanghai" -e NEXUS_CONTEXT="/"  -e INSTALL4J_ADD_VM_PARAMS="-Djavax.net.ssl.keyStore=/etc/nexus/certs/nexus.hfwas.devops.com.key -Djavax.net.ssl.keyStoreCertificate=/etc/nexus/certs/nexus.hfwas.devops.com.crt -Dnexus-args='-Djetty.https.port=8443 -Djetty.https.keystore=/etc/nexus/certs/nexus.hfwas.devops.com.key -Djetty.https.trustStore=/etc/nexus/certs/nexus.hfwas.devops.com.crt'" --shm-size 2g docker.xuanyuan.run/sonatype/nexus3:latest
```

关键参数：

- `NEXUS_CONTEXT`:
- `INSTALL4J_ADD_VM_PARAMS`:

访问地址：

验证效果：

