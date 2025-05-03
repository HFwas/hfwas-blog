---
category:
  - jvm
tag:
  - java
  - jvm
  - jstat
  - jstack
---
# JVM - JVM相关的命令

## jps 

- 可以显示当前全部java进程pid，可以用来迅速查看当前容器当中运行的java进程

## jstack

- jstack是JVM自带的Java堆栈跟踪工具，它用于打印出给定的java进程ID、core file、远程调试服务的Java堆栈信息
- jstack命令用于生成虚拟机当前时刻的线程快照。
- 线程快照是当前虚拟机内每一条线程正在执行的方法堆栈的集合，生成线程快照的主要目的是定位线程出现长时间停顿的原因， 如线程间死锁、死循环、请求外部资源导致的长时间等待等问题。
- 线程出现停顿的时候通过jstack来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做什么事情，或者等待什么资源。
- 如果java程序崩溃生成core文件，jstack工具可以用来获得core文件的java stack和native stack的信息，从而可以轻松地知道java程序是如何崩溃和在程序何处发生问题。
- 另外，jstack工具还可以附属到正在运行的java程序中，看到当时运行的java程序的java stack和native stack的信息, 如果现在运行的java程序呈现hung的状态，jstack是非常有用的

## jinfo

- 观察进程运行环境参数，包括Java System属性和JVM命令行参数

## jstat

- JVM内建的指令对Java应用程序的资源和性能进行实时的命令行的监控，包括了对进程的classloader，compiler，gc情况；
- 特别的，一个极强的监视内存的工具，可以用来监视VM内存内的各种堆和非堆的大小及其内存使用量，以及加载类的数量

### 参数

- -class：统计classloader行为信息 
- -compile：统计编译行为信息 
- -gc：统计jdk gc时heap信息 
- -gccapacity：统计不同的generations（包括新生区，老年区，permanent区）相应的heap容量情况 
- -gccause：统计gc的情况，（同-gcutil）和引起gc的事件 
- -gcnew：统计gc时，新生代的情况 
- -gcnewcapacity：统计gc时，新生代heap容量 
- -gcold：统计gc时，老年区的情况 
- -gcoldcapacity：统计gc时，老年区heap容量 
- -gcpermcapacity：统计gc时，permanent区heap容量 
- -gcutil：统计gc时，heap情况