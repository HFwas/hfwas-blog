# Nexus操作-本地jar包发布到nexus

- 修改maven配置，如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">


    <localRepository>/Users/houfei/repository</localRepository>
    <interactiveMode>true</interactiveMode>

    <!--设置 Nexus 认证信息-->
    <servers>
        <server>
            <id>nexus-releases</id>
            <username>admin</username>
            <password>admin123</password>
        </server>
        <server>
            <id>nexus-snapshots</id>
            <username>admin</username>
            <password>admin123</password>
        </server>
    </servers>
    
    
    <!--设置 Nexus 镜像，后面只要本地没对应的以来，则到 Nexus 去找-->
    <mirrors>
        <mirror>
            <id>nexus-releases</id>
            <mirrorOf>*</mirrorOf>
            <url>http://nexus IP：端口号/repository/maven-releases/</url>
        </mirror>
        <mirror>
            <id>nexus-snapshots</id>
            <mirrorOf>*</mirrorOf>
            <url>http://nexus IP：端口号/repository/maven-snapshots/</url>
        </mirror>
        <mirror>
            <id>maven-aliyun</id>
            <name>aliyun maven</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
            <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>

    <profiles>
        <profile>
            <id>nexus</id>
            <repositories>
                <repository>
                    <id>nexus-releases</id>
                    <url>http://nexus-releases</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
                <repository>
                    <id>nexus-snapshots</id>
                    <url>http://nexus-snapshots</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>nexus-releases</id>
                    <url>http://nexus-releases</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </pluginRepository>
                <pluginRepository>
                    <id>nexus-snapshots</id>
                    <url>http://nexus-snapshots</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>nexus</activeProfile>
    </activeProfiles>
    
</settings>
```

- 项目的pom.xml当中添加如下：

```xml
<distributionManagement>
    <repository>
        <id>nexus-releases</id>
        <url>http://nexus地址：端口号/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>  
        <id>nexus-snapshots</id>  
        <url>http://nexus地址：端口号/repository/maven-snapshots/</url>  
    </snapshotRepository>  
</distributionManagement>
```

- 完毕！！