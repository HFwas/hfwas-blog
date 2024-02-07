package com.hfwas.doc.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author houfei
 * @package com.hfwas.doc.model.entity
 * @date 2024/1/17
 */
@Data
@AllArgsConstructor
@TableName(value = "hfwas-user")
public class BlogUser {
    @TableId(type = IdType.AUTO)
    private Long  id;
    @TableField(value = "username")
    private String username;
    @TableField(value = "real_name")
    private String real_name;
    @TableField(value = "email")
    private String email;
    @TableField(value = "phone")
    private String phone;
    @TableField(value = "avator")
    private String avator;
    @TableField(value = "birthday")
    private String birthday;
    @TableField(value = "summary")
    private String summary;
    @TableField(value = "login_count")
    private Integer login_count;
    @TableField(value = "login_time")
    private LocalDateTime login_time;
    @TableField(value = "login_ip")
    private String login_ip;
    @TableField(value = "state")
    private Integer state;
    @TableField(value = "qq")
    private Integer qq;
    @TableField(value = "wechatv")
    private String wechatv;
    @TableField(value = "github")
    private String github;
    @TableField(value = "gitee")
    private String gitee;
    @TableField(value = "create_by")
    private String createBy;
    @TableField(value = "create_time")
    private LocalDateTime createTime;
    @TableField(value = "update_by")
    private String updateBy;
    @TableField(value = "update_time")
    private LocalDateTime updateTime;
    @TableField(value = "")
    private Integer version;
}
