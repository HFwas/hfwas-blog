---
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-Nexus上传java依赖

- nexus支持的Java依赖库有三种，包括group, hosted, proxy三种。
- 本篇文件基于内网环境nexus依赖库管理Java依赖，需要将开发人员项目本地编译所需要的依赖库上传到内网环境下

- 开发人员需要将本地maven配置的本地仓库地址下的依赖库文件夹打包，
- 运维人员在服务器当中创建两个脚本，推送依赖库到对应的nexus
- 创建脚本，命名为：nexus-push.sh，将repoDir修改为存放maven依赖的地址。

```sh
#!/bin/bash
workDir=$(dirname "$PWD")
repoDir=$workDir/repo
# 将此脚本mavenimport.sh 复制并运行到包含文件的存储库目录的根目录

cp mavenimport.sh $repoDir/mavenimport.sh
chmod -R 777 $repoDir/mavenimport.sh
cd $repoDir && ./mavenimport.sh -u nexus账号 -p nexus密码 -r http://nexus地址/repository/仓库地址
```

- 创建maven导入脚本，命名为：mavenimport.sh

```sh
#!/bin/bash
# 将此脚本复制并运行到包含文件的存储库目录的根目录
# 此脚本试图明确排除本身不被上传，因此脚本名称很重要（脚本请使用 mavenimport.sh）
# 获取命令行参数
while getopts ":r:u:p:" opt; do
    case $opt in
        r) REPO_URL="$OPTARG"
        ;;
        u) USERNAME="$OPTARG"
        ;;
        p) PASSWORD="$OPTARG"
        ;;
    esac
done
find . -type f -not -path './mavenimport\.sh*' -not -path '*/\.*' -not -path '*/\^archetype\-catalog\.xml*' -not -path '*/\^maven\-metadata\-local*\.xml' -not -path '*/\^maven\-metadata\-deployment*\.xml' -not -path '*/_remote\.repositories' | sed "s|^\./||" | xargs -I '{}' curl -u "$USERNAME:$PASSWORD" -X PUT -v -T {} ${REPO_URL}/{} ;
```

- 执行nexus-push.sh脚本，执行`sh nexus-push.sh`

- 需要注意的是，还需要将推送nexus仓库修改为snapshot 仓库重新推送一下。