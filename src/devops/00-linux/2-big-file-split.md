# Linux-大文件切片传输

## 前提操作

- windows：默认没有split命令，需要安装一个git客户端，git bash默认自带split命令
- mac：默认自带split命令

## 背景知识

- 部分客户的内网传输有限制，一般为2G大小，需要将镜像文件分片传输到内网，在内网通过合并拿到原始文件，
- 钉钉/飞书/微信这些聊天软件也有文件传输大小限制，可以先将大文件切割分片，拿到所有分片文件之后再合并

## 实践

查看文件大小：

<img src="./images/1761014676966-e9f61dd3-a944-47ce-8d40-a2cd0306af8b.png" alt="image.png" style="zoom:50%;" />

执行命令：`split -b 2G -d -a 3 package.tar package_part_`

<img src="./images/1761014719194-37e95f22-fda5-4124-ad41-d8a7f733db38.png" alt="image-20250916160814201.png" style="zoom:50%;" />

执行合并：

```
cat package_part_* > package.tar
```

![image-20250916160934507.png](./images/1761014729474-7cc55297-ecac-435b-af69-7dd35e315e35.png)