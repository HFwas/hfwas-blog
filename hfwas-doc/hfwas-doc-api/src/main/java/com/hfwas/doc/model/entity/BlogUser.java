package com.hfwas.doc.model.entity;

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

    private Integer id;
    private String username;
    private String real_name;
    private String email;
    private String phone;
    private String avator;
    private String birthday;
    private String summary;
    private Integer login_count;
    private LocalDateTime login_time;
    private String login_ip;
    private Integer state;
    private Integer qq;
    private String wechatv;
    private String github;
    private String gitee;
    private String create_by;
    private LocalDateTime create_time;
    private String update_by;
    private LocalDateTime update_time;
    private Integer version;
}
