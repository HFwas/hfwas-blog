#!/bin/bash
workDir=$(dirname "$PWD")
#repoDir=$workDir/repo
repoDir=/Users/houfei/Downloads/npm-nexus-test
# 将此脚本mavenimport.sh 复制并运行到包含文件的存储库目录的根目录

cp npmimport.sh $repoDir/npmimport.sh
chmod -R 777 $repoDir/npmimport.sh
cd $repoDir && ./npmimport.sh -u 账号 -p 密码 -r http://地址+端口号/service/rest/v1/components?repository=npm-private
