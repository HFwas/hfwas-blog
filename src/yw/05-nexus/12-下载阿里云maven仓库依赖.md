---
icon: pen-to-square
date: 2024-06-06
order: 10
category:
  - nexus
tag:
  - nexus
---
# Nexus操作-下载阿里云maven仓库依赖

## 云效仓库

- 阿里云仓库地址主要指的是云效提供的中央仓库，[可以访问这个地址来访问](https://developer.aliyun.com/mvn/guide)

![image-20240606221323672](images/image-20240606221323672.png)

- 在这个页面我们可以找到云效依赖的源地址： `https://repo1.maven.org/maven2/`

![image-20240606221347714](images/image-20240606221347714.png)

- 熟悉的同学看到这个页面结构和内容应该不陌生了，以及我们熟悉的archetype-catalog.xml  和robots.txt 两个文件

## 文件archetype-catalog.xml

- 我们下载下来archetype-catalog.xml文件，查看内容可以发现文件当中标准的xml内容格式，和maven项目当中的pom.xml当中的depency 标签内容非常详细，
- 再仔细查看，文件内容长达362940行，基本是云效仓库当中所有依赖对应的所有版本依赖，基于这个文件，我们可以获取依赖对应的路径和版本列表

```xml
<?xml version="1.0" encoding="UTF-8"?>
<archetype-catalog>
  <archetypes>
    <archetype>
      <groupId>am.ik.archetype</groupId>
      <artifactId>elm-spring-boot-blank-archetype</artifactId>
      <version>0.0.3</version>
      <description>Blank multi project for Spring Boot + Elm</description>
    </archetype>
    <archetype>
      <groupId>am.ik.archetype</groupId>
      <artifactId>elm-spring-boot-blank-archetype</artifactId>
      <version>0.0.2</version>
      <description>Blank multi project for Spring Boot + Elm</description>
    </archetype>
    <archetype>
      <groupId>am.ik.archetype</groupId>
      <artifactId>elm-spring-boot-blank-archetype</artifactId>
      <version>0.0.1</version>
      <description>Blank multi project for Spring Boot + Elm</description>
    </archetype>
    <archetype>
      <groupId>am.ik.archetype</groupId>
      <artifactId>graalvm-blank-archetype</artifactId>
      <version>0.1.3</version>
      <description>Blank project for GraalVM</description>
    </archetype>
    <archetype>
      <groupId>am.ik.archetype</groupId>
      <artifactId>graalvm-blank-archetype</artifactId>
      <version>0.1.2</version>
      <description>Blank project for GraalVM</description>
    </archetype>
  <archetypes>  
<archetype-catalog>   
```

- 

## 脚本下载

- 根据archetype-catalog.xml文件内容提取groupId和artifactId和version三个字段内容，
- 然后基于提取出来的内容，本地创建对应的文件目录，
- 下载`groupId/artifactId`下的maven-metadata.xml开头的这几个文件

![image-20240606221948355](images/image-20240606221948355.png)

- 下载`groupId/artifactId/version`下的所有文件
- 脚本内容如下所示：

```bash
#!/bin/bash

mkdir maven-aliyun
cd maven-aliyun
# 解析XML文件并创建文件夹
create_folders_from_xml() {
    XML_FILE="$1"
    
    # 使用xmlstarlet解析XML文件
    GROUP_IDS=$(xmlstarlet sel -t -m "/archetype-catalog/archetypes/archetype" -v "groupId" -n "$XML_FILE")
    ARTIFACT_IDS=$(xmlstarlet sel -t -m "/archetype-catalog/archetypes/archetype" -v "artifactId" -n "$XML_FILE")
    VERSIONS=$(xmlstarlet sel -t -m "/archetype-catalog/archetypes/archetype" -v "version" -n "$XML_FILE")
    
    # 循环创建文件夹
    IFS=$'\n'
    for i in $(seq 1 $(echo "$GROUP_IDS" | wc -l)); do
        GROUP_ID=$(echo "$GROUP_IDS" | sed -n "${i}p")
        ARTIFACT_ID=$(echo "$ARTIFACT_IDS" | sed -n "${i}p")
        VERSION=$(echo "$VERSIONS" | sed -n "${i}p")
        
        # 替换 . 为 /
        GROUP_ID=$(echo "$GROUP_ID" | sed 's/\./\//g')
        ARTIFACT_ID=$(echo "$ARTIFACT_ID" | sed 's/\./\//g')
        
        FOLDER_PATH="${GROUP_ID}/${ARTIFACT_ID}/${VERSION}"
        mkdir -p "$FOLDER_PATH"
        echo "Created folder: $FOLDER_PATH"
    done
}

# 替换 'your_xml_file.xml' 为您的 XML 文件路径
create_folders_from_xml '/Users/hfwas/Downloads/archetype-catalog.xml'

```

- 