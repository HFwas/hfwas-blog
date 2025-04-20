---
icon: pen-to-square
date: 2024-04-05
order: 5
category:
  - ansible
tag:
  - ansible
---
# Ansible-Template

- 文本文件，嵌套有脚本（使用模板编程语言编写)
- jinja2语言，使用字面量，有下面形式
  - 字符串：使用单引号或双引号
  - 数字：整数，浮点数
  - 列表：`[item1,item2,]`
  - 元组：`(item1,item2,)`
  - 字典：`{key1:value1,key2:value2,…}`
  - 布尔型：`true/false`

- 算术运算：`+，- ，*，/，//，%，**`
- 比较操作：`==，!=，>，>=，<，<=`
- 逻辑运算：`and,or,not`
- 流表达式：`For If When`

## templates功能

- templates功能：根据模块文件动态生成对应的配置文件
  - templates文件必须存放于templates目录下，且命名为j2结尾
  - yaml/yml文件需和templates目录平级，目录结构如下：
    - ./
    - temptyl
    - templates
    - nginx.conf.j2


- 示例：利用templates同步nginxi配置文件，准备templates/nginx.conf.j2文件

```yaml
vim temnginx.yml

- hosts:websrvs
  remote_user:root
  tasks:
    - name:template config to remote hosts
      template:src=nginx.conf.j2 dest=/etc/nginx/nginx.conf
      
ansible-playbook temnginx.yml
```

- 修改文件nginx.conf.j2下面行为worker_processes ({ansible_processor_vcpus })
  - cat temnginx2.yml

```yaml
- hosts:websrvs
  remote_user:root
  tasks:
    - name:template config to remote hosts
      template:src=nginx.conf.j2 dest=/etc/nginx/nginx.conf
    
ansible-playbook temnginx2.yml
```

## 算法运算

- 示例：
  - vim nginx.conf.j2
  - worker_processes {ansible_processor_vcpus**2});
  - worker_processes {ansible_processor_vcpus+2 })

## when

- 条件测试：如果需要根据变量、facts或此前任务的执行结果来做为某task执行与否的前提时要用到条件测试，通过when语句实现，在task中使用，jinja2的语法格式
- when语句
- 在task后添加when子句即可使用条件测试；when语句支持inja2表达式语法
- 示例：

```yaml
tasks:
  - name:"shutdown RedHat flavored systems"
    command:/sbin/shutdown -h now
    when:ansible_os_family ="RedHat"
```

## 迭代：with_items

- 迭代：当有需要重复性执行的任务时，可以使用迭代机制

  - 对迭代项的引用，固定变量名为”item“
  - 要在task中使用with items给定要迭代的元素列表
  - 今列表格式：
    - 字符串
    - 字典
  - 示例

  ```yaml
  - name:add several users
    user:name={{item }} state=present groups=wheel
    with_items:
      - testuser1
      - testuser2
  
  上面语句的功能等同于下面的语句：
  
  - name:add user testuser1
    user:name=testuser1 state=present groups=wheel
  - name:add user testuser2
    user:name=testuser2 state=present groups=wheel

- 迭代嵌套子变量

```yaml
- hosts websrvs
  remote user:root
  tasks:
  	- name:add some groups
      group:name={{ item }} state=present
      with_items:
        - group1
        - group2
        - group3
    
- name:add some users
  user:name={{item.name }} group={{item.group }} state=present
  with_items:
  	- name: 'user1', group: 'group1'}
    - name: 'user2', group: 'group2'}
    - name: 'user3', group: 'group3'}
```

## For循环

- template当中使用

```
{% for vhost in nginx_vhosts %}
server { 
listen {{ vhost.listen  | default('80 default_server')}};
{% if vhost.server_name is defined %}
server_name {{ vhost.server_name }}
{% endif %}
{% if vhost.root is defined %}
root {{ vhost.root }}
{% endif %}
```

- 示例

![image-20231225214716361]./images/image-20231225214716361.png)

