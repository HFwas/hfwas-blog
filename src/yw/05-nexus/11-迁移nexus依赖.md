---
icon: pen-to-square
date: 2024-06-06
order: 9
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-迁移nexus依赖

- nexus提供了一个api，可以获取仓库下所有组件的接口，接口如下：
- 有一个参数continurationtoken ， 可以获取下一次分页的数据，nexus 接口的数据不是一次性返回回来的，是根据上一次接口的continurationtoken的值作为这一次接口的入参来调用，获取这一次的数据。根据这样的原理，我们可以循环调用接口来获取仓库下的所有组件信息

```bash
#!/bin/bash

nexusurl=http://ip:port
repository=npm-group
continuationToken=""
mkdir demo1
cd demo1
fetchComponents() {
    local token="$1"

    # 构建CURL命令
    local curlCmd="curl -s -X GET \"$nexusurl/service/rest/v1/components?repository=$repository"
    if [[ "$token" != "" ]]; then
        curlCmd="$curlCmd&continuationToken=$token"
    fi
    curlCmd="$curlCmd\" -H 'accept: application/json' -H 'NX-ANTI-CSRF-TOKEN: 0.028119600179752124' -H 'X-Nexus-UI: true'"

    # 执行请求
    local response=$(eval "$curlCmd")

    # 提取新continuationToken和组件信息
    local newContinuationToken=$(echo "$response" | jq -r '.continuationToken // empty')
    local components=$(echo "$response" | jq -r '.items[] | {group, name, version, path: .assets[].path}')

    # 输出组件信息并保存到文件（可按需调整输出方式）
    echo "$components" >> components_info.json

    # 如果有新的continuationToken，则递归调用
    if [[ "$newContinuationToken" != "" ]]; then
        echo "Fetching next page with continuationToken: $newContinuationToken"
        fetchComponents "$newContinuationToken"
    else
        echo "All components fetched."
    fi
}

# 初始化调用
fetchComponents "$continuationToken"

echo "All component data has been collected. Check components_info.json for details."
```

- 根据获取的所有组件信息当中的downloadurl参数，可以获取所有组件的下载地址，同时稍作处理就可以同时创建组件的层级目录，脚本内容如下：

```bash
cat components_info.json | grep path | awk -F ':' '{print $2}' | cut -d "\"" -f 2 | sort | uniq > path1.txt
cat path1.txt | awk -F'/[^/]*$' '{print $1}' | sort | uniq > path2.txt


while IFS= read -r DIRNAME; do
    echo $DIRNAME
    if [ ! -d $DIRNAME ]; then
      mkdir -p $DIRNAME
    fi
done < path2.txt

while IFS= read -r DIRNAME; do
    echo $DIRNAME
    DOWNLOAD_URL="$nexusurl/repository/$repository/$DIRNAME"
    if [ ! -f $DIRNAME ]; then
      wget $DOWNLOAD_URL -O $DIRNAME
    fi
done < path1.txt

rm components_info.json
rm path2.txt
rm path1.txt
```

- 修改之后的完整脚本如下：
  - ⚠️注意：这个脚本可以用来同步maven仓库信息，npm仓库需要稍作改动，不需要创建目录文件夹，直接下载文件到指定目录下即可

```bash
#!/bin/bash

nexusurl=http://ip:port
repository=npm-group
continuationToken=""
mkdir demo1
cd demo1
fetchComponents() {
    local token="$1"

    # 构建CURL命令
    local curlCmd="curl -s -X GET \"$nexusurl/service/rest/v1/components?repository=$repository"
    if [[ "$token" != "" ]]; then
        curlCmd="$curlCmd&continuationToken=$token"
    fi
    curlCmd="$curlCmd\" -H 'accept: application/json' -H 'NX-ANTI-CSRF-TOKEN: 0.028119600179752124' -H 'X-Nexus-UI: true'"

    # 执行请求
    local response=$(eval "$curlCmd")

    # 提取新continuationToken和组件信息
    local newContinuationToken=$(echo "$response" | jq -r '.continuationToken // empty')
    local components=$(echo "$response" | jq -r '.items[] | {group, name, version, path: .assets[].path}')

    # 输出组件信息并保存到文件（可按需调整输出方式）
    echo "$components" >> components_info.json

    # 如果有新的continuationToken，则递归调用
    if [[ "$newContinuationToken" != "" ]]; then
        echo "Fetching next page with continuationToken: $newContinuationToken"
        fetchComponents "$newContinuationToken"
    else
        echo "All components fetched."
    fi
}

# 初始化调用
fetchComponents "$continuationToken"

echo "All component data has been collected. Check components_info.json for details."

cat components_info.json | grep path | awk -F ':' '{print $2}' | cut -d "\"" -f 2 | sort | uniq > path1.txt
cat path1.txt | awk -F'/[^/]*$' '{print $1}' | sort | uniq > path2.txt


while IFS= read -r DIRNAME; do
    echo $DIRNAME
    if [ ! -d $DIRNAME ]; then
      mkdir -p $DIRNAME
    fi
done < path2.txt

while IFS= read -r DIRNAME; do
    echo $DIRNAME
    DOWNLOAD_URL="$nexusurl/repository/$repository/$DIRNAME"
    if [ ! -f $DIRNAME ]; then
      wget $DOWNLOAD_URL -O $DIRNAME
    fi
done < path1.txt

rm components_info.json
rm path2.txt
rm path1.txt

```

