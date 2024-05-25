#!/bin/bash
#公司镜像仓库地址
harborUrl=harbor地址+端口
#客户现场的镜像仓库地址和仓库
targerHarbor=harbor地址+端口/项目空间

images=(

)
mkdir images
echo Save images start..
for i in ${images[@]}; do
  #镜像信息数组，内容按/号切割。[0]:仓库名称和端口,[1]:命名空间,[2]:镜像名称和版本
  harborItem=(${i//// })
  harborUrl=${harborItem[0]}
  harborNamespace=${harborItem[1]}
  image=${harborItem[2]}
  #镜像名称和版本，内容按:号切割。[0]:镜像名称,[1]:镜像版本
  imageItem=(${image//:/ })
  imageName=${imageItem[0]}
  imageVersion=${imageItem[1]}
  tarName=${image/\:/-}
  echo $tarName ------
  pullImage=$harborUrl/$harborNamespace/$imageName:$imageVersion
  echo docker pull ${pullImage}
  docker pull ${pullImage}
  echo docker save $tarName.tar -o ${pullImage}
  docker save -o $tarName.tar  ${pullImage}
  echo mv $tarName.tar images/
  mv $tarName.tar images/
  echo " ------打包-$tarName-OK---- "
done
echo package Successfully