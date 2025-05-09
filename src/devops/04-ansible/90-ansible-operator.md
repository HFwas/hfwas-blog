---
category:
  - ansible
tag:
  - ansible
---
# Ansible-实操

## 批量更新用户密码

```yaml
---
- hosts: system
  tasks:
    - name: update user password
      user: name={{ item.name }} password={{ item.password | password_hash('sha512')}} update_password=always
      with_items:
      	- name: root
      	  password: aaa
      	- name: admin
      	  password: 123
```

## 批量更新ssh配置

```yaml
---
- hosts: system
  tasks:
    - name: update user password
      lineinfile: 
        path: /etc/ssh/sshd_config
        regex: '^PermitRootLogin'
        line: 'PermitRootLogin no'
      notify: restart sshd
  handlers:
    - name: restart sshd
      service: name=sshd state=restartd

- hosts: system
  tasks:
    - name: cancle ssh 22 port
      lineinfile: 
        path: /etc/ssh/sshd_config
        regex: '^Port 22'
        state: absent
      notify: restart sshd
  handlers:
    - name: restart sshd
      service: name=sshd state=restartd
      
```

## 批量扩容系统盘

### 扩容脚本

- 脚本命名为disk-shell.sh

```bash
#!/bin/bash
fdisk /dev/vda<<EOF  
n




w
EOF
pvcreate /dev/vda3
vfextend openeuler /dev/vda3
lvextend -l +100%FREE /dev/mapper/openeuler-root
resize2fs /dev/mapper/openeuler-root
```

### playbook

```yaml
---
- hosts: system
  tasks:
    - name: resize disk size
      scipt:  name=disk-shell.sh
```

## ansible-playbook 显示执行结果

示例：

```yaml
---
- hosts: system
  tasks:
    - name: update user password
      user: name={{ item.name }} password={{ item.password | passwo
      register: shell_result
    
    - debug:
        var: shell_result.stdout_lines
```
