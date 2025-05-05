# Spring-为什么不推荐Autowired,推荐构造器注入

首先，我们要知道，spring提供的依赖注入方式有哪些？分别是：

-  属性注入，
-  setter注入
-  构造器注入

## 示例

属性注入是通过在属性上添加Autowired或者Resource注解实现，代码示例：

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

## Autowired对比Resource

- Autowired是spring提供的注解，Resource是JDK提供的注解
- Autowired默认是通过bytype类型注入，如果UserService有两个实现类，比如CusUserService和LdapUserService，这样注入就会报错。
- Resource注解中有两个注解，分别是name和type，
  - 不指定，默认通过byname注入，找不到name然后使用bytype注入
  - 指定name，根据name名称来注入
  - 指定type，根据type类型注入
- Autowired对比Resource，默认推荐使用Resource注解，但是：
  - Resource还是属性注入的范畴，无法清楚地知道bean的依赖关系
  - 是在运行时注入，实际代码当中可能在接口调用的时候才会报错空指针之类的问题

## 构造器注入

- spring官方推荐使用构造器注入，有这些优点：
- 更清晰的依赖关系：构造器明确指出了类需要哪些依赖，代码一目了然，符合“依赖显式化”的设计原则。
- 易于测试：单元测试时，可以直接通过构造器传入 mock 对象，无需使用 Spring 容器。
- 更安全：避免出现空指针一场，构造器注入在实例创建时就完成了依赖注入，依赖不能为空（除非加了 `@Nullable`），不会出现使用时为 null 的情况。
- 支持 `final` 字段：构造器注入可以让依赖字段为 `final`，增强不可变性和线程安全。
