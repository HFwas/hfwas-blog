package com.hfwas.doc.model.entity;

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
@TableName(value = "hfwas_tag_classification")
public class BlogTagClassification {
    private Integer id;
    private String name;
    private Integer sortId;
    private String description;
    private Integer status;
    private String createBy;
    private LocalDateTime createTime;
    private String updateBy;
    private LocalDateTime updateTime;
    private Integer version;
    private Integer isDeleted;
    private String code;

}
