---
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-上传前端依赖

  - 前端支持三种依赖库，包括三种，分别是hosted , proxy , group类型。
  - 本篇文章完全基于内网环境下，和互联网无法联通的环境下去处理。
  - 前端需要将所需要的前端所有依赖提供给运维人员，运维人员将前端tgz文件推送到nexus上，提供内网流水线CICD使用。
  - 推送前端依赖需要创建两个脚本，和Java类似：

  - 创建npmimport.sh脚本

  ```bash
  #!/bin/bash
  # 获取命令行参数
  while getopts ":r:u:p:" opt; do
      case $opt in
          r) NEXUS_URL="$OPTARG"
          ;;
          u) NEXUS_USERNAME="$OPTARG"
          ;;
          p) NEXUS_PASSWORD="$OPTARG"
          ;;
      esac
  done
  # find 并批量上传
  find . -type f -name '*.tgz'  | sed "s|^\./||" | xargs -I '{}' \
  curl -u "$NEXUS_USERNAME:$NEXUS_PASSWORD" -X 'POST' -v \
    ${NEXUS_URL} \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F 'npm.asset=@{};type=application/x-compressed' ;
  ```

  - 创建npmpush.sh脚本

  ```bash
  #!/bin/bash
  workDir=$(dirname "$PWD")
  #repoDir=$workDir/repo， 此地址是设置的前端依赖存放地址
  repoDir=/Users/houfei/Downloads/npm-nexus-test
  # 将此脚本mavenimport.sh 复制并运行到包含文件的存储库目录的根目录
  
  cp npmimport.sh $repoDir/npmimport.sh
  chmod -R 777 $repoDir/npmimport.sh
  cd $repoDir && ./npmimport.sh -u nexus账号 -p nexus密码 -r http://nexus地址/service/rest/v1/components?repository=npm-private
  ```

  - 执行`sh npmpush.sh`脚本即可。