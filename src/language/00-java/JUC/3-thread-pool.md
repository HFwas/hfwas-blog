# JUC-线程池详解
## 创建线程池

- 通过 Executor 框架的工具类 Executors 创建线程池
- 通过 ThreadPoolExecutor 构造函数创建

## Executors 工具类

- 提供了集中常见的内置线程池
- newFixedThreadPool 创建固定线程数量的线程池
- newSingleThreadExecutor 创建单一线程的线程池
- newCachedThreadPool 创建缓存的线程池
- newScheduledThreadPool 创建调度的线程池

### newFixedThreadPool

- 方法分

```java
public static ExecutorService newFixedThreadPool(int nThreads) {
        return new ThreadPoolExecutor(nThreads, nThreads,
                                      0L, TimeUnit.MILLISECONDS,
                                      new LinkedBlockingQueue<Runnable>());
    }
```

- 



## ThreadPoolExecutor

### 构造函数

- ThreadPoolExecutor 有七个参数，其中核心参数有三个：
  - corePoolSize：核心线程数量
  - maximumPoolSize：最大线程池数量
  - workQueue：工作队列
- 其他参数：
  - keepAliveTime：线程池中的数量大于 corePoolSize 的时候，如果这时候
  - unit：keepAliveTime 参数的单位
  - threadFactory：线程工厂
  - handler：线程的拒绝策略

```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
        if (corePoolSize < 0 ||
            maximumPoolSize <= 0 ||
            maximumPoolSize < corePoolSize ||
            keepAliveTime < 0)
            throw new IllegalArgumentException();
        if (workQueue == null || threadFactory == null || handler == null)
            throw new NullPointerException();
        this.corePoolSize = corePoolSize;
        this.maximumPoolSize = maximumPoolSize;
        this.workQueue = workQueue;
        this.keepAliveTime = unit.toNanos(keepAliveTime);
        this.threadFactory = threadFactory;
        this.handler = handler;

        String name = Objects.toIdentityString(this);
        this.container = SharedThreadContainer.create(name);
    }
```

## 线程池原理

- 

