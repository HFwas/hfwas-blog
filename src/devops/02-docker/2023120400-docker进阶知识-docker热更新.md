---
category:
  - docker
tag:
  - docker
---
# Docker进阶知识-docker热更新

- 修改docker配置文件
- 执行`vim /etc/docker/daemon.json`文件
- 两种方法：
  - 第一种方法：
    - 执行`systemctl daemon-reload `
    - 执行`systemctl restart docker `
  - 第二种方法：
    - 执行`kill -SIGHUP $(pidof dockerd)`
    - 检查是否配置成功，执行`docker info | grep -i live`