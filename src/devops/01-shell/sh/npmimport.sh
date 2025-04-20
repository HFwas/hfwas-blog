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