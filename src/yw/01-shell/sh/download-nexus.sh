#!/bin/bash

nexusurl=http://IP:port
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
