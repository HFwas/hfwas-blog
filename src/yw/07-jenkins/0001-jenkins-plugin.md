---
icon: pen-to-square
date: 2024-04-30
category:
  - jenkins
tag:
  - jenkins
---

# Jenkins-插件配置修改

- 主要修改两个地方，
  - 插件的更新配置地址
  - 插件的安装位置
- 我们采取docker部署jenkins的方式，同时将`/var/jenkins_home`挂载到虚拟机路径，这样我们修改配置直接在虚拟机当中修改即可
- `/var/jenkins_home`挂载到虚拟机的`/root/docker`路径下
- 更新`/root/docker/hudson.model.UpdateCenter.xml`文件，修改为以下内容：

```
[root@iZ2ze2f8ei1292nx0ljlfzZ jenkins]# cat hudson.model.UpdateCenter.xml 
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>[root@iZ2ze2f8ei1292nx0ljlfzZ jenkins]# 
[root@iZ2ze2f8ei1292nx0ljlfzZ jenkins]# 
```

- 更新`/root/jenkins/updates/default.json`文件，将`d`替换为`d`
- 重启服务，执行`docker restart 容器id`