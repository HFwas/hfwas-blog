

# docker进阶知识-远程docker

- 有一种场景，本地安装了docker，服务器当中也安装了docker，服务器是arm架构的，现在想要实现在本地链接服务器当中的docker进程去执行命令
- 修改配置文件，

```
[root@localhost ~]# cat /etc/docker/daemon.json
{
  "hosts": [ "unix:///run/containerd/containerd.sock", "tcp://0.0.0.0:2376" ]
}
```

- 执行命令查看`netstat -ntlp | grep 2376`
- 本地执行`export DOCKER_HOST=tcp://远程虚拟机地址:2376`
- 本地执行`docker ps`