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
@TableName(value = "hfwas_doc")
public class BlogDoc {
    @TableId(type = IdType.AUTO)
    private Long id;
    @TableField(value = "title")
    private String title;
    @TableField(value = "content")
    private long content;
    @TableField(value = "collect")
    private Integer collect;
    @TableField(value = "likes")
    private Integer likes;
    @TableField(value = "read")
    private Integer read;
    @TableField(value = "status")
    private Integer status;
    @TableField(value = "summary")
    private String summary;
    @TableField(value = "origin")
    private Integer origin;
    @TableField(value = "author")
    private String author;
    @TableField(value = "source")
    private Integer source;
    @TableField(value = "publich")
    private Integer publich;
    @TableField(value = "sort")
    private Integer sort;
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
