---
category:
  - shell
tag:
  - shell
---
# Linux-用户登录被锁定

- 查看用户登录失败次数，执行`pam_tally2`
- 解锁指定用户，执行`pam_tally2 -r -u test1`

![image-20231220160500668](./images/image-20231220160500668.png)

- 再次登录即可