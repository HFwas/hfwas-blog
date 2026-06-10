---
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-下载前端yarn-resoluted依赖

- 前端依赖管理工具如果是通过yarn来管理，执行yarn install会生成一个文件，文件名称为：yarn.lock文件，
- yarn.loc文件当中如果有`resolved`字段，可以使用这个脚本来下载依赖
- 创建脚本，脚本内容为：

```bash
#!/bin/bash
repolist=$(cat yarn.lock | grep resolved | awk '{print $2}')
echo ${repolist} > yarn.txt

for package in $repolist; do
  array=$(echo "$package" | sed 's|/-/.*||')
  echo ${array[@]}
  a2=${array##*//}
  arr=($(echo "$a2" | tr '/' ' '))
  echo ${arr[@]}
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

- 