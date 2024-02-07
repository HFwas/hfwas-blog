package com.hfwas.doc.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author houfei
 * @package com.hfwas.doc.model.entity
 * @date 2024/2/6
 */
@Data
@AllArgsConstructor
@TableName(value = "hfwas_tag_relate")
public class BlogTagRelate {
    @TableId(type = IdType.AUTO)
    private Long id;
    @TableField(value = "tagId")
    private Integer tagId;
    @TableField(value = "relateTypeCode")
    private String relateTypeCode;
    @TableField(value = "relateInstanceId")
    private Integer relateInstanceId;
}
