---
category:
  - ansible
tag:
  - ansible
---
# Ansible-常用模块

- Command:在远程主机执行命令，默认模块，可忽略-m选项
  - ansible srvs -m command -a 'service vsftpd start'
  - ansible srvs -m command-a 'echo magedu | passwd --stdin wang' 不成功
  - 比命令不支持SVARNAME   < >  I ; &等，用shell模块实现
- Shell:和command相以，用shell执行命令
  - ansible srv -m shell -a 'echo magedu |passwd --stdin wang'
  - 调用bash执行命令类以 cat  /tmp/stanley.md | awk -F '|'  ''{print $1,$2}'  &> /tmp/example.txt这些复杂命令，即使使用shell也可能会失败，解决办法：写到脚本时，copy到远程，执行，再把需要的结果拉回执行命令的机器
- Script:运行脚本
  - -a  "/PATH/TO/SCRIPT_FILE"
  - ansible websrvs -m script -a  f1.sh
- Copy:从服务器复制文件到客户端，
  - ansible srv  -m copy -a "src=/root/f1.sh dest=/tmp/f2.sh owner=wang mode=600. backup=yes”  如目标存在，默认覆盖，此处指定先备份
  - ansible srv  -m copy  -a "content='test content\n' dest=/tmp/f1.txt”利用内容，直接生成目标文件
- Fetch:从客户端取文件至服务器端，copy相反，目录可先tar
  - ansible srv  -m fetch-a 'src=/root/a.sh dest=/data/scripts'
- File:设置文件属性
  - ansible srv-m file-a "path=/root/a.sh owner=wang mode=755"
  - ansible web -m file -a 'src=/app/testfile dest=/app/testfile-link state=link'
- Hostname:管理主机名
  - ansible node1 -m hostname -a "name=websrv"
- Cron:计划任务
  - 支持时间：minute,hour,day,month,weekday
  - ansible srv -m cron -a "minute=*/5  job='/usr/sbin/ntpdate 172.16.0.1 &>/dev/null name=Synctime” 创建任务
  - ansible srv-m cron-a'state=absent name=:Synctime' 删除任务
- yum:管理包
  - ansible srv  -m yum  -a 'name=httpd state=latest'
  - ansible srv  -m yum -a 'name=httpd state=absent'
- Service:管理服务
  - ansible srv -m service-a 'name=httpd state=stopped'
  - ansible srv -m service -a 'name=httpd state=started'
  - ansible srv -m service -a  'name=httpd state=reloaded'
  - ansible srv -m service -a 'name=httpd state=restarted'
- User:管理用户
  - ansible srv -m user -a 'name=user1 comment="test user"uid=2048 home=/app/user1 group=root
  - ansible srv  -m user -a 'name=sysuser1 system=yes home=/app/sysuser1'
  - ansible srv -m user -a 'name:=user1 state=:absent remove=:yes'删除用户及家目录等数据
- Group:管理组
  - ansible srv -m group -a "name=testgroup system=yes"
  - ansible srv -m group -a "name=testgroup state=absent"
- lineinfile模块：针对一个文件当中行内容的修改
  - 更新行内容：ansible test1  -m lineinfile -a "path=/etc/ssh/sshd_conf regex='^PermitRootLogin' line='PermitRootLogin no'"
  - 插入行内容：ansible test1  -m lineinfile -a "path=/etc/ssh/sshd_conf insertafter='7755$' line='Port 22'"
- authorized_key模块：对虚拟机批量互信

```
- name: Set authorized key taken from file
  authorized_key:
    user: root
    state: present
    key: "{{ lookup('file', '/root/.ssh/id_rsa.pub') }}"
```

- 
