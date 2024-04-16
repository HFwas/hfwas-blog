---
icon: pen-to-square
date: 2024-04-16
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-Nexus下载前端npm依赖

- 此脚本是为了方便开发人员运维人员下载前端n p m依赖而编写使用，因为是自己在项目使用，所以分享出来
- 前端的依赖管理工具是npm的话，执行npm install命令，会在本地前端项目路径下生成package-lock.json文件，文件当中指定了前端项目所需要的各种依赖，以及对应依赖的约束版本
- 下载前端依赖就是基于package-lock.json当中的版本依赖路径决定。
- 前提条件
  - 需要前端开发人员提供package-lock.json
  - 运维人员下载依赖需要在互联网环境下，需要可以访问`https://www.npmjs.com/package/vue`
- 创建脚本为`npm-download.sh`，脚本内容如下：

```bash
#!/bin/bash
repolist=$(jq -r '.dependencies | keys[] as $k | "\(.[$k].resolved)"' < package-lock2024032000.json)
echo ${repolist} > aaa1230.txt

for package in $repolist; do
  array=$(echo "$package" | sed 's|/-/.*||')
  a2=${array##*//}
  arr=($(echo "$a2" | tr '/' ' '))

  for var in "${arr[@]}"; do
    if [ ${#arr[@]} -eq 3 ]; then
      PACKAGE_NAME="${arr[1]}/${arr[2]}"
      PACKAGE="${arr[2]}"
      echo $PACKAGE_NAME
      echo $PACKAGE
      # File containing version information (each line contains a version)
      VERSION_FILE="versions12300.txt"

      # Specify the registry URL
      REGISTRY_URL="https://registry.npmmirror.com"

      curl -s "${REGISTRY_URL}/${PACKAGE_NAME}/" | jq -r '.versions | keys_unsorted | .[]' > "$VERSION_FILE"

      # Create a directory to store the downloaded files
      if [ ! -d  $PACKAGE_NAME ]; then
        mkdir -p $PACKAGE_NAME

        echo $PACKAGE_NAME >> latest.txt

        # Iterate through each version and download the corresponding .tgz file
        while IFS= read -r VERSION; do
            FILE_NAME="${PACKAGE}-${VERSION}.tgz"

            DOWNLOAD_URL="${REGISTRY_URL}/${PACKAGE_NAME}/-/${FILE_NAME}"

            if [ ! -f ${PACKAGE_NAME}/${FILE_NAME} ]; then
                if wget --spider --quiet "$DOWNLOAD_URL"; then
                  echo "Downloading ${DOWNLOAD_URL}..."
                  wget $DOWNLOAD_URL -O ${PACKAGE_NAME}/${FILE_NAME}
                  cp ${PACKAGE_NAME}/${FILE_NAME} /Users/houfei/anpm/
                fi

            fi
        done < "$VERSION_FILE"
      else
        # Iterate through each version and download the corresponding .tgz file
        while IFS= read -r VERSION; do
            FILE_NAME="${PACKAGE}-${VERSION}.tgz"

            DOWNLOAD_URL="${REGISTRY_URL}/${PACKAGE_NAME}/-/${FILE_NAME}"
            echo $VERSION
            if [ ! -f ${PACKAGE_NAME}/${FILE_NAME} ]; then
                if wget --spider --quiet "$DOWNLOAD_URL"; then
                  echo "Downloading ${DOWNLOAD_URL}..."
                  echo "${DOWNLOAD_URL}" >> latest-version.txt
                  wget $DOWNLOAD_URL -O ${PACKAGE_NAME}/${FILE_NAME}
                  cp ${PACKAGE_NAME}/${FILE_NAME} /Users/houfei/anpm/
                fi

            fi
        done < "$VERSION_FILE"
      fi
    elif [ ${#arr[@]} -eq 2 ]; then
      PACKAGE_NAME="${arr[1]}"
      PACKAGE="${arr[1]}"
      echo $PACKAGE_NAME
      echo $PACKAGE
      # File containing version information (each line contains a version)
      VERSION_FILE="versions12300.txt"

      # Specify the registry URL
      REGISTRY_URL="https://registry.npmmirror.com"

      curl -s "${REGISTRY_URL}/${PACKAGE_NAME}/" | jq -r '.versions | keys_unsorted | .[]' > "$VERSION_FILE"

      if [ ! -d $PACKAGE_NAME ]; then
        # Create a directory to store the downloaded files
        mkdir -p $PACKAGE_NAME

        echo $PACKAGE_NAME >> latest.txt

        # Iterate through each version and download the corresponding .tgz file
        while IFS= read -r VERSION; do
            FILE_NAME="${PACKAGE}-${VERSION}.tgz"

            DOWNLOAD_URL="${REGISTRY_URL}/${PACKAGE_NAME}/-/${FILE_NAME}"

            if [ ! -f ${PACKAGE_NAME}/${FILE_NAME} ]; then
                if wget --spider --quiet "$DOWNLOAD_URL"; then
                  echo "Downloading ${DOWNLOAD_URL}..."
                  wget $DOWNLOAD_URL -O ${PACKAGE_NAME}/${FILE_NAME}
                  cp ${PACKAGE_NAME}/${FILE_NAME} /Users/houfei/anpm/
                fi

            fi
        done < "$VERSION_FILE"
      else
        # Iterate through each version and download the corresponding .tgz file
        while IFS= read -r VERSION; do
            FILE_NAME="${PACKAGE}-${VERSION}.tgz"

            DOWNLOAD_URL="${REGISTRY_URL}/${PACKAGE_NAME}/-/${FILE_NAME}"
            echo $VERSION
            if [ ! -f ${PACKAGE_NAME}/${FILE_NAME} ]; then
                if wget --spider --quiet "$DOWNLOAD_URL"; then
                  echo "Downloading ${DOWNLOAD_URL}..."
                  echo "${DOWNLOAD_URL}" >> latest-version.txt
                  wget $DOWNLOAD_URL -O ${PACKAGE_NAME}/${FILE_NAME}
                  cp ${PACKAGE_NAME}/${FILE_NAME} /Users/houfei/anpm/
                fi

            fi
        done < "$VERSION_FILE"
      fi
    fi
  done
done
```

- 将提供的package-lock2024032000.json放到脚本同级目录下，执行`sh npm-download.sh`,会自动下载前端依赖到同级目录下
- 效果类似下图：

![image-20240323142328017]./images/image-20240323142328017.png)

- 本地执行脚本更新的依赖会放在`/Users/houfei/anpm`，每次执行玩脚本，直接打包`/Users/houfei/anpm`即可，
