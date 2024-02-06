package com.hfwas.doc.model.entity;

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
    private Integer id;
    private Integer tagId;
    private String relateTypeCode;
    private Integer relateInstanceId;
}
