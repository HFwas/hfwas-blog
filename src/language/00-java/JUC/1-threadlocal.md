# JUC-ThreadLocal详解

## 简单实用
- 提供一个简单例子来使用 ThreadLocal
- 声明 ThreadLocal，比如：`private static final ThreadLocal<Object> threadLocal = new NamedThreadLocal<>("logs");`
- 先暂时省略 set 步骤，当需要 threadLocal 的时候，我们通常是：threadLocal.get()

## threadLocal.get()
- 先看代码：
```java
public T get() {
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
    if (map != null) {
        ThreadLocalMap.Entry e = map.getEntry(this);
        if (e != null) {
            @SuppressWarnings("unchecked")
            T result = (T)e.value;
            return result;
        }
    }
    return setInitialValue();
}
ThreadLocalMap getMap(Thread t) {
    return t.threadLocals;
}
public class Thread implements Runnable {
    /* ThreadLocal values pertaining to this thread. This map is maintained
     * by the ThreadLocal class. */
    ThreadLocal.ThreadLocalMap threadLocals = null;
}
```
- 从代码可以看到，每个线程维护了自己的 ThreadLocal.ThreadLocalMap threadLocals 变量，从 ThreadLocal 当中获取数据，
- 本质上是以当前线程作为 key 从 ThreadLocalMap 获取 ThreadLocalMap.Entry 对象，说明 value 存储的是 Entry