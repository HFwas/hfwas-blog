---
category:
  - nginx
tag:
  - https
  - nginx
  - blog
star: true
---

# Nginx-配置https

- 提前准备好后缀名称为pem和key的文件，
- 上传到服务器nginx对应目录下，我这边新建了一个cert文件夹放置

![image-20240404152301042](images/image-20240404152301042.png)

- 在nginx配置文件当中增加一个location，主要是ssl_certificate和ssl_certificate_key两个参数，参考以下写法：

![image-20240404152352983](images/image-20240404152352983.png)

- nginx配置https完成。
