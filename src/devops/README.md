---
title: Devops 技能
category:
  - 使用指南
---

# Devops技能

从2021年开始上班之后，前边参与了一个项目一年多，其他的工作内容都和Devops密切相关，除了本身产品功能的开发之外，也做了很多工作，包括Devops相关组件的研究，工作相关的shell编写，项目部署Docker和K8s的研究等等。

此外一方面，在这期间，对于其他的组件更加熟练，所以我也将Linux，Shell，Ansible，Helm，Minio等都纳入到了Devops技能模块，也会将这些技能的文档补充在这个模块下。

在工作之外，也接触到了其他的代码管理，CI/CD等等同类型的工具，我也会将这些工具补充到相同分类下。

## 组件类

- 代码管理：Gitlab，Gitee
- 依赖管理和制品管理：Nexus
- CI/CD：Jenkins，Github Action
- 部署管理：Docker，K8s
- 代码质量：Sonarqube
- 定时任务：XXL-JOB
- Webide：coder-server

在Devops模块当中，你可以收获本人关于Devops的实践经验，希望能对大家有所帮助：

- Nexus：
  - 下载前端依赖的脚本，包括解析npm,yarn,pnpm包管理工具依赖的shell校验，经过实际项目检验，支持了客户生产环境至少百余个项目前端的前端构建工作，全网唯一提供此脚本的博主
  - 下载公网阿里云maven依赖，同步到内网离线环境下的脚本，经过实际生产项目检验
  - Java项目的maven依赖的上传脚本
- Jenkins
  - 提供基于Pod模版的Jenkins启动镜像Dockerfile镜像
  - 丰富更多构建Pod的k8s基础镜像，包括：java不同语言的maven,gradle,ant支持，
- Webide:
  - 更多webide的k8s基础镜像，包括java,npm,python,go，优化用户体验，提供内置的扩展，打通CI/CD的配置

