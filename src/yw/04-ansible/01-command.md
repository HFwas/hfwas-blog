---
icon: pen-to-square
date: 2024-04-05
order: 2
category:
  - ansible
tag:
  - ansible
---
# Ansible-基础命令

- Ansible系列命令
  - ansible ansible-doc ansible-playbook     ansible-vault
  - ansible-console ansible-galaxy ansible-pull
- ansible-doc:显示模块帮助
  - ansible-doc [options][module...]
  - -a 显示所有模块的文档
  - -l,--list 列出可用模块
  - -s,-snippets显示指定模块的playbook片段
  - 示例：
    - ansible-doc列出所有模块
    - ansible--doc ping查看指定模块帮助用法
    - ansible-doc-s ping查看指定模块帮助用法

- Ansible:通过ssh实现配置管理、应用部署、任务执行等功能，建议配置Ansible端能基于密钥认证的方式联系各被管理节点

- ansible host-pattern -m module_name -a args 

  - -version显示版本
  - -m module指定模块，默认为command
  - -V详细过程-VW-W更详细
  - -list-hosts显示主机列表，可简写--list
  - -k,--ask-pass  提示输入ssh连接密码，默认Key验证
  - -K,-ask-become-pass提示输入sudo时的口令
  - -C,-check检查，并不执行
  - -T,-timeout=TIMEOUT执行命令的超时时间，默认10s
  - -u,-user=REMOTE_USER执行远程执行的用户
  - -b,-become代替I旧版的sudo切换

- Ansible 的host-pattern 匹配主机的列表

  - All:表示所有Inventory中的所有主机
    - ansible all -m ping
  - *:通配符
    - ansible  "*" -m ping
    - ansible 192.168.1.*-m ping
    - ansible "*srvs" -m ping
  - 或关系
    - ansible "websrvs:appsrvs"-m ping
    - ansible"192.168.1.10:192.168.1.20"  -m ping
  - 逻辑与
    - ansible "websrvs:&dbsrvs"-m ping
    - 在websrvs组并且在dbsrvs组中的主机
  - 逻辑非
    - ansible 'websrvs:!dbsrvs'-m ping
    - 在websrvs组，但不在dbsrvs组中的主机
    - 注意：此处为单引号
  - 综合逻辑
    - ansible 'websrvs:dbsrvs:&appsrvs:!ftpsrvs'-m ping
  - 正则表达式
    - ansible "websrvs:&dbsrvs"-m ping
    - ansible "~(webdb).*.magedu\.com"-m ping

- ansible命令执行过程

  - 1.加载自己的配置文件默认/etc/ansible/ansible.cfg
  - 2.加载自己对应的模块文件，如command
  - 3.通过ansible将模块或命令生成对应的临时py文件，并将该文件传输至远程服务器的对应执行用户$HOME/.ansible/tmp/ansible-tmp-数字/XXX.PY文件
  - 4.给文件+x执行
  - 5.执行并返回结果
  - 6.删除临时py文件，sleep 0退出
  - 可以执行命令后加--vvv
  - 执行状态：
    - 绿色：执行成功并且不需要做改变的操作
    - 黄色：执行成功并且对目标主机做变更
    - 红色：执行失败

  - 示例
    - 以wang用户执行ping存活检测
      - ansible all -m ping-u wang -k
    - 以wang sudo3至root执行ping存活检测
      - ansible all -m ping-u wang-b-k
    - 以wang sudo?至mage用户执行ping存活检测
      - ansible all-m ping-u wang-b-k--become-user mage
    - 以wang sudo至root用户执行ls
      - ansible all -m command -u wang--become-user=root-a 'ls/root'-b-k-K

  
