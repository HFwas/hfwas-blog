#!/bin/bash
workDir=$(dirname "$(dirname "$PWD")")
repoDir=$workDir/repo
# 将此脚本mavenimport.sh 复制并运行到包含文件的存储库目录的根目录

cp mavenimport.sh $repoDir/mavenimport.sh
chmod -R 777 $repoDir/mavenimport.sh
cd $repoDir && ./mavenimport.sh -u 账号 -p 密码 -r nexus地址/repository/maven-releases
