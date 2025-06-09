# Spring-为什么不推荐Autowired,推荐构造器注入

首先，我们要知道，Spring 提供的依赖注入方式有哪些？分别是：

-  属性注入，
-  Setter 注入
-  构造器注入

## 示例

属性注入是通过在属性上添加 Autowired 或者 Resource 注解实现，代码示例：

```java
@Autowired
// @Resource
private UserService userService;
```

setter 注入代码示例：

```java
public UserController {
  private UserService userService;
  
  public void setUserService(UserService userService) {
      this.userService = userService;
  } 
}
```

构造器注入示例：

```java
public UserController {
  private UserService userService;
  
  public UserController(UserService userService) {
      this.userService = userService;
  } 
}
```

## Autowired vs Resource

- Autowired 是 Spring 提供的注解，Resource 是 JDK 提供的注解
- Autowired 默认是通过 bytype 类型注入，如果 UserService 有两个实现类，比如 CusUserService 和 LdapUserService，这样注入就会报错。
- Resource 注解注入有两种方式，分别是 name 和 type，
  - 不指定，默认通过 byname 注入，找不到 name 然后使用 bytype 注入
  - 指定 name，根据 name 名称来注入
  - 指定 type，根据 type 类型注入
- Autowired 对比 Resource，默认推荐使用 Resource 注解，但是：
  - Resource 还是属性注入的范畴，无法清楚地知道 bean 的依赖关系
  - 是在运行时注入，实际代码当中可能在接口调用的时候才会报错空指针之类的问题

## 构造器注入

- Spring 官方推荐使用构造器注入，有这些优点：
- 更清晰的依赖关系：构造器明确指出了类需要哪些依赖，代码一目了然，符合“依赖显式化”的设计原则。
- 易于测试：单元测试时，可以直接通过构造器传入 Mock 对象，无需使用 Spring 容器。
- 更安全：避免出现空指针异常，构造器注入在实例创建时就完成了依赖注入，依赖不能为空（除非加了 `@Nullable`），不会出现使用时为 null 的情况。
- 支持 `final` 字段：构造器注入可以让依赖字段为 `final`，增强不可变性和线程安全。
