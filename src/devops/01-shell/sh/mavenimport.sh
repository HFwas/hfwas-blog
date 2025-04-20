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

