---
icon: pen-to-square
date: 2024-04-23
category:
  - k8s
tag:
  - k8s
---
# k8s运维操作-执行apply报错kind not set

- 使用命令`../helm create drawio .`生成helm模版文件，然后修改对应的values.yaml和char.yaml
- 控制台执行`kubectl -n 命名空间 apply -f drawio/`，显示报错，报错信息如下：

![Snipaste_2024-04-23_23-05-57](images/Snipaste_2024-04-23_23-05-57.png)

- 解决办法：

  - 执行`helm install drawio .`

  ![Snipaste_2024-04-23_23-06-44](images/Snipaste_2024-04-23_23-06-44.png)