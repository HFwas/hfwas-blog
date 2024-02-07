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
@TableName(value = "hfwas-comment")
public class BlogComment {
    @TableId(type = IdType.AUTO)
    private Long id;
    @TableField(value = "doc_id")
    private Integer docId;
    @TableField(value = "content")
    private String content;
    @TableField(value = "parent_id")
    private Integer parentId;
    @TableField(value = "create_id")
    private String createBy;
    @TableField(value = "create_time")
    private LocalDateTime createTime;
    @TableField(value = "update_by")
    private String updateBy;
    @TableField(value = "update_time")
    private LocalDateTime updateTime;
    private Integer version;
}
