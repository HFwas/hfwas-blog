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
 * @date 2024/2/6
 */
@Data
@AllArgsConstructor
@TableName(value = "hfwas_tag")
public class BlogTag {
    @TableId(type = IdType.AUTO)
    private Long id;
    @TableField(value = "classification_id")
    private Integer classificationId;
    @TableField(value = "name")
    private String name;
    @TableField(value = "sort_id")
    private Integer sortId;
    @TableField(value = "description")
    private String description;
    @TableField(value = "status")
    private Integer status;
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
    @TableField(value = "isDeleted")
    private Integer isDeleted;
    @TableField(value = "colour")
    private String colour;
    @TableField(value = "code")
    private String code;
}
