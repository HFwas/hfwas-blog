---
icon: pen-to-square
date: 2024-05-17
order: 5
category:
  - jenkins
tag:
  - jenkins
---

# Jenkins-命令行当中基于root操作

- jenkins当中遇到了一个这样的问题
  - 虚拟机没有开放root登录
  - 只能其他用户登录，在切换到root操作
  - 应用更新只能在root用户下操作
- 添加一个子步骤，编写内容：

```
su - root<<!
root密码
root用户下相关操作
！
```

- 这样可以实现基于其他用户登录，但是登录之后切换到root操作