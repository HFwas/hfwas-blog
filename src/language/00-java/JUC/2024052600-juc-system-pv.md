

# JUC-信号量与PV操作

- 信号量（Semaphore）和PV操作是操作系统中用于实现进程同步和互斥的关键概念。

- 信号量（Semaphore）：

  - 信号量是一种用于进程同步和互斥的数据结构，它通常是一个整数变量。信号量的操作包括两个主要函数：
    - P操作（Wait操作）：P操作用于获取（申请）信号量。当一个进程执行P操作时，它试图减小信号量的值。如果信号量的值大于零，它会成功并继续执行，否则它会被阻塞，直到信号量的值变得大于零为止。这可以用来实现互斥，因为一次只有一个进程能够成功执行P操作，其他进程会被阻塞。
    - V操作（Signal操作）：V操作用于释放信号量。当一个进程执行V操作时，它增加信号量的值。这可以用来表示一个资源被释放，从而允许其他等待该资源的进程继续执行。V操作也被称为Signal操作。

  - 信号量常用于解决临界区问题、进程间通信和资源管理等多种并发编程场景。信号量可以是计数信号量（允许多个进程同时访问资源）或二进制信号量（只允许一个进程访问资源）。

- PV操作：

  - PV操作是对信号量的具体实现，通常使用两个基本操作来实现信号量的P和V操作。它们的含义如下：
    - P操作（Proberen，意为尝试）：这是获取信号量的操作，类似于Wait操作。执行P操作时，如果信号量的值大于零，就将其减1，否则进程会被阻塞。
    - V操作（Verhogen，意为增加）：这是释放信号量的操作，类似于Signal操作。执行V操作时，会将信号量的值加1，表示释放了一个资源。

  - PV操作是信号量的底层实现，它们通常是原子操作，可以保证多个进程在并发执行时正确地协作，防止竞争条件和数据不一致性。

- 总的来说，信号量和PV操作是操作系统中用于处理并发访问共享资源和实现进程同步的重要机制，它们有助于确保多个进程能够按照规定的顺序和条件访问共享资源，从而提高了系统的稳定性和性能

## 基于信号量实现线程交替打印

- 代码如下：

```
import java.util.concurrent.Semaphore;

public class Main {
    private final static Semaphore semaphore = new Semaphore(1);
    private final static Semaphore semaphore2 = new Semaphore(0);
    public static void main(String[] args) {
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    semaphore.acquire(1);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println('a');
                semaphore2.release();
            }
            semaphore.release();

        }).start();

        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    semaphore2.acquire(1);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println('b');
                semaphore.release();
            }
            semaphore.release();

        }).start();

    }
}
```