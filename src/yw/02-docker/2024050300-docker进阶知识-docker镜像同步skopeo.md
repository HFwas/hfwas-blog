---
icon: pen-to-square
date: 2024-05-03
category:
  - docker
tag:
  - docker
---

# docker进阶知识-docker镜像同步skopeo

## 安装

- [具体的安装参考官方文档](https://github.com/containers/skopeo/blob/main/install.md)
- 虚拟机环境是centos7.9

![image-20240503155345419](images/image-20240503155345419.png)

- 执行命令`yum -y install skopeo`

![image-20240503155412186](images/image-20240503155412186.png)

- 测试命令，执行`skopeo`

![image-20240503155432708](images/image-20240503155432708.png)

## 升级skopeo版本

- 执行`skopeo --version`发现skopeo版本才只有0.1.40版本，查询github release页面，都已经到了1点几版本，

![image-20240503160550874](images/image-20240503160550874.png)

- 执行命令` skopeo list-tags docker://registry.cn-hangzhou.aliyuncs.com/dkyy/devops-project-svc-v2`还显示没有list-tags参数

![image-20240503163154021](images/image-20240503163154021.png)

- 

