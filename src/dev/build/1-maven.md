# 开发工具-Maven实践

## maven deploy上传快照制品带时间戳

- 在pom.xml当中配置以下内容：

```java
<repositories>
        <!-- 配置nexus远程仓库 -->
        <repository>
            <id>nexus</id>
            <name>Nexus Snapshot Repository</name>
            <url>http://ip:port/repository/maven-public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
    <distributionManagement>
        <repository>
            <id>maven-releases</id>
            <name>rdc-releases</name>
            <url>http://ip:port/repository/maven-releases/</url>
        </repository>
        <snapshotRepository>
            <id>maven-snapshots</id>
            <name>rdc-snapshots</name>
            <url>http://ip:port/repository/maven-snapshots/</url>
        </snapshotRepository>
    </distributionManagement>
```

- 代码依赖版本必须带有SNAPSHOT标识，比如：2.6.1-SNAPSHOT，执行mvn deploy的时候，上传到nexus snapshot会带有时间错版本，类似：2.6.1-20250814.131209-1