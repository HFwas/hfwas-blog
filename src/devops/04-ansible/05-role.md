---
category:
  - ansible
tag:
  - ansible
---
# Ansible-Role

- roles
  - ansilbe自1.2版本引入的新特性，用于层次性、结构化地组织olaybook.。roles能够根据层次型结构自动装载变量文件、tasks以及handlers等。要使用roles只需要在playbook中使用include指令即可。简单来讲，roles就是通过分别将变量、文件、任务、模板及处理器放置于单独的目录中，并可以便捷地include它们的一种机制。角色一般用于基于主机构建服务的场景中，但也可以是用于构建守护进程等场景中

- 复杂场景：建议使用roles,代码复用度高
  - 变更指定主机或主机组
  - 如命名不规范维护和传承成本大
  - 某些功能需多个Playbook,通过Includes即可实现

- 
