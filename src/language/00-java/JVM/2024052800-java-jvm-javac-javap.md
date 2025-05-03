---
category:
  - jvm
tag:
  - java
  - javac
  - javap
---

# JVM - javac和javap命令

- javac命令执行java代码编译
- javap 可以对class文件反编译，获取对应的字节码文件

## Javap

- 新建文件Demo02

```
package com.hfwas.juc.synchronizedd;

/**
 * @Auther: HFwas
 * @Date: 2020/12/2
 * @Description: synchronized原理的学习
 * 1.通过反汇编的方式
 * 2.通过Java源码的方式
 * @version: 1.0
 */
public class Demo02 {

    private static  Object obj = new Object();

    public static void main(String[] args) {
        synchronized (obj){
            System.out.println("1111111");
        }
    }

    public synchronized  void test01(){
        System.out.println("222222222");
    }
}

```

- 执行命令`javac Demo02.java`，编译得到对应的clas文件
- 执行反编译命令，执行命令`javap -c Demo02`可以查看文件的字节码

```
警告: 文件 ./Demo02.class 不包含类 Demo02
Compiled from "Demo02.java"
public class com.hfwas.juc.synchronizedd.Demo02 {
  public com.hfwas.juc.synchronizedd.Demo02();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #7                  // Field obj:Ljava/lang/Object;
       3: dup
       4: astore_1
       5: monitorenter
       6: getstatic     #13                 // Field java/lang/System.out:Ljava/io/PrintStream;
       9: ldc           #19                 // String 1111111
      11: invokevirtual #21                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      14: aload_1
      15: monitorexit
      16: goto          24
      19: astore_2
      20: aload_1
      21: monitorexit
      22: aload_2
      23: athrow
      24: return
    Exception table:
       from    to  target type
           6    16    19   any
          19    22    19   any

  public synchronized void test01();
    Code:
       0: getstatic     #13                 // Field java/lang/System.out:Ljava/io/PrintStream;
       3: ldc           #27                 // String 222222222
       5: invokevirtual #21                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
       8: return

  static {};
    Code:
       0: new           #2                  // class java/lang/Object
       3: dup
       4: invokespecial #1                  // Method java/lang/Object."<init>":()V
       7: putstatic     #7                  // Field obj:Ljava/lang/Object;
      10: return
}
```

### 详细参数

- 主要的是-c参数，其他的不常用

```
-help 帮助
-l 输出行和变量的表
-public 只输出public方法和域
-protected 只输出public和protected类和成员
-package 只输出包，public和protected类和成员，这是默认的
-p -private 输出所有类和成员
-s 输出内部类型签名
-c 输出分解后的代码，例如，类中每一个方法内，包含java字节码的指令，
-verbose 输出栈大小，方法参数的个数
-constants 输出静态final常量
```