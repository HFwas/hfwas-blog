# K8s运维操作-configmap格式错乱问题

- 经常命令行操作k8s cm的话，肯定会遇到configmap 格式错乱的问题，例如下

- 这时候需要手动修改错乱的格式，执行脚本`./update-configmap.sh namesapce configmap-name`

- 脚本内容如下：需要动态替换`.data."main.conf"`data后的值

```bash
#!/bin/bash
namespce=$1
configmap=$2

rm -rf ${configmap}.txt
rm -rf ${configmap}.txt-E
rm -rf ${configmap}.txt_bak

kubectl -n ${namespce} get cm ${configmap} -o json |jq '.data."main.conf"' -r  > ${configmap}.txt
sed -i -E 's/[[:space:]]+$//g' ${configmap}.txt
sed -i "_bak"  's/\t/    /g' ${configmap}.txt
cat ${configmap}.txt

#kubectl -n ${namespce} get cm ${configmap} -o yaml > ${configmap}.yaml
```

## 示例

- 执行`kubectl -n namespace get cm configmap-name -o yaml`获取错乱的 configmap 内容

```yaml
apiVersion: v1
data:
  application.yml: "server:\n  port: 9060\n  max-http-header-size: 21024\nfile:\n
    \ server:\n    # 目前只支持minio\n    type: minio\nminio:\n  url: #执行器通讯TOKEN [选填]：非空时启用；\n    accessToken:\n
    \   executor:\n      #执行器AppName [选填]：执行器心跳注册分组依据；为空则关闭自动注册\n      appname: app-management-svc\n
    \     #执行器注册 [选填]：优先使用该配置作为注册地址，为空时使用内嵌服务 ”IP:PORT“ 作为注册地址。从而更灵活的支持容器类型执行器动态IP和动态映射端口问题\n
    \     address:\n      #执行器IP [选填]：默认为空表示自动获取IP，多网卡时可手动设置指定IP，该IP不会绑定Host仅作为通讯实用；地址信息用于
    \"执行器注册\" 和 \"调度中心请求并触发任务\"\n      ip:\n      #执行器端口号 [选填]：小于等于0则自动获取；默认端口为9999，单机部署多个执行器时，注意要配置不同执行器端口\n
    \     port: \n      #执行器运行日志文件存储磁盘路径 [选填] ：需要对该路径拥有读写权限；为空则使用默认路径\n      logpath:
    /tmp/log\n      #执行器日志文件保存天数 [选填] ： 过期日志自动清理, 限制值大于等于3时生效; 否则, 如-1, 关闭自动清理功能\n
    \     logretentiondays: 30\nuser:\n  manager:\n    password: 1qaz@2wsx"
kind: ConfigMap
metadata:
  annotations:
    application.yml: ""
    description: ""
    meta.helm.sh/release-name: 
    meta.helm.sh/release-namespace: 
    user: houfei
  creationTimestamp: "2023-09-04T02:46:59Z"
  labels:
    image: ""
  resourceVersion: "2186919987"
```

- 将多余字段干掉，整理一份干净的 configmap yaml 文件

```yaml
apiVersion: v1
data:
  application.yml: |-
    yaml内容
kind: ConfigMap
metadata:
  name: configmap-name
  namespace: namespace
```

- 新建脚本，将文档上述的脚本内容粘贴进去，名称示例为：update-cm.sh，执行`chmod u+x update-cm.sh`
- 执行脚本，获取格式化好的yaml文件内容，`./update-cm.sh namespace configmap-name`

```yaml
server:
  port: 9060
  max-http-header-size: 21024
file:
  server:
    # 目前只支持minio
    type: minio
```

- 将上述格式化好的放到yaml当中，如下：

```yaml
apiVersion: v1
data:
  application.yml: |-
    server:
      port: 9060
      max-http-header-size: 21024
    file:
      server:
        # 目前只支持minio
        type: minio
kind: ConfigMap
metadata:
  name: app-management-svc
  namespace: cloudnative-dky-devops
```

- 最后执行`kubectl -n namespace apply -f configmap-name.yaml`
