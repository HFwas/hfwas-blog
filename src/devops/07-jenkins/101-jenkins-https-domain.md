# Jenkins-支持https加域名访问

注意：我这里使用的我windows电脑做的测试，linux/mac需要修改命令

镜像地址：swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/jenkins/jenkins:lts-jdk21

jenkins版本：

本地host配置映射：

```bash
127.0.0.1 jenkins.hfwas.devops.com
```

新建certs文件夹：E:\docker\jenkins\cert

生成证书文件：

```bash
# 生成自签名证书crt和key
openssl req -newkey rsa:4096 -nodes -sha256 -keyout jenkins.hfwas.devops.com.key -x509 -days 365 -out jenkins.hfwas.devops.com.crt
```

将证书转换为pc12格式：

```bash
#  CRT+KEY 转换为 PKCS12 格式（Java 需先转此格式再生成 JKS
openssl pkcs12 -export -in jenkins.hfwas.devops.com.crt -inkey jenkins.hfwas.devops.com.key -out jenkins.hfwas.devops.com.p12 -name jenkins -password pass:123456
```

将pkcs12格式转换为java能够识别的jks格式：

```bash
# 将 PKCS12 转换为 Java 密钥库（JKS）
keytool -importkeystore -srckeystore jenkins.hfwas.devops.com.p12 -srcstoretype PKCS12 -srcstorepass 123456 -destkeystore jenkins.hfwas.devops.com.jks -deststoretype JKS -deststorepass 123456
```

powershell当中启动jenkins：

```bash
docker run -d --name jenkins --restart always -p 8445:8443 -p 50000:50000 -v E:\docker\jenkins\data:/var/jenkins_home -v E:\docker\jenkins\cert:/var/jenkins_certs -e TZ="Asia/Shanghai" --env JENKINS_OPTS="--httpPort=-1 --httpsPort=8443 --httpsKeyStore=/var/jenkins_certs/jenkins.hfwas.devops.com.jks --httpsKeyStorePassword=123456" swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/jenkins/jenkins:lts-jdk21
```

访问地址：https://jenkins.hfwas.devops.com:8445/

效果如下：

