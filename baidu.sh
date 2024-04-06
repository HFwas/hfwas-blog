#!/bin/zsh
rm -rf urls_*.txt
#cat ./src/.vuepress/dist/sitemap.xml | grep -oE 'https://[^<]+\.html' > urls.txt
cat ./src/.vuepress/dist/sitemap.xml | grep -oE 'https://[^<]+\.html' | awk 'NR%10==1{x="urls_"++i".txt"} {print > x}'

#curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://www.hfwas.tech&token=8Y8b9Xz9JqJg6jaD"

# 遍历当前目录下所有以urls_*.txt的文件
for file in urls_*.txt; do
    # 检查文件是否存在并且不为空
    if [ -s "$file" ]; then
        echo "baidu file: $file"
        # 执行 curl 命令，将文件内容作为数据传递
        curl -H 'Content-Type:text/plain' --data-binary @"$file" "http://data.zz.baidu.com/urls?site=https://www.hfwas.tech&token=8Y8b9Xz9JqJg6jaD"
    else
        echo "File $file is empty or does not exist"
    fi
done

rm -rf urls_*.txt