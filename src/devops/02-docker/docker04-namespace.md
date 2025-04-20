---
icon: pen-to-square
date: 2024-04-16
order: 14
category:
  - docker
tag:
  - docker
---
# docker进阶-namespace

- linux当中的namespace技术，主要作用保证资源的隔离

# 类别

- Cgroup
- IPC
- Network
  - 在容器当中有一套独立的网络接口，还有独立的TCP/IP协议栈配置，隔离网络环境

- Mount
  - 实现容器自己的文件系统完全独立于宿主机的文件系统，相互隔离。

- PID
  - 负责不同容器的进程，和宿主机的进程隔离

- Time
- User
- UTS

# 分类介绍

## IPC



## Network





## Mount

- 它对容器进程视图的改变，一定是伴随着挂载操作（mount）才能生效。
- Mount Namespace 修改的，是容器进程对文件系统“挂载点”的认知。但是，这也就意味着，只有在“挂载”这个操作发生之后，进程的视图才会被改变。而在此之前，新创建的容器会直接继承宿主机的各个挂载点。

## PID



## Time



## User



## UTS
