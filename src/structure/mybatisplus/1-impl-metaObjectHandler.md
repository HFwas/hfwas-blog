# 实现 MetaObjectHandler 接口自动填充字段值

## 实体类字段添加注解

- 在实体类上添加注解`@TableField(fill = FieldFill.INSERT)`

```java
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

    @TableField(fill = FieldFill.INSERT)
    private String createBy;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private String updateBy;
```

## 实现 MetaObjectHandler 接口

- 实现接口 MetaObjectHandler，重写 insertFill 方法和 updateFill 方法

```java
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        LocalDateTime now = LocalDateTime.now();

        this.strictInsertFill(metaObject, "createTime", LocalDateTime.class, now);
        this.strictInsertFill(metaObject, "updateTime", LocalDateTime.class, now);
        this.strictInsertFill(metaObject, "createBy", String.class, getCurrentUsername());
        this.strictInsertFill(metaObject, "updateBy", String.class, getCurrentUsername());
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        this.strictUpdateFill(metaObject, "updateTime", LocalDateTime.class, LocalDateTime.now());
        this.strictUpdateFill(metaObject, "updateBy", String.class, getCurrentUsername());
    }

    private String getCurrentUsername() {
        // 实际情况中可通过 Spring Security 获取当前登录用户
        // 如：SecurityContextHolder.getContext().getAuthentication().getName()
        return "system"; // 示例写死
    }
}
```