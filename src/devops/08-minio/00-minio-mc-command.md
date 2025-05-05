# Minio-mc命令

## 下载地址

- x86: [ https://dl.min.io/client/mc/release/linux-amd64/mc](https://dl.min.io/client/mc/release/linux-amd64/mc)
- Arm: [https://dl.min.io/client/mc/release/linux-arm64/mc](https://dl.min.io/client/mc/release/linux-arm64/mc)

## 同步历史minio到新的minio

- 设置旧的minio，执行`mc alias set source oldminio地址 账号 密码`
- 拷贝源minio所有文件到本地置顶路径下，执行``
- 设置目标环境的minio，执行``mc alias set target newminio地址 账号 密码``
- 将源minio拷贝目标minio，执行`mc mirror source target`

