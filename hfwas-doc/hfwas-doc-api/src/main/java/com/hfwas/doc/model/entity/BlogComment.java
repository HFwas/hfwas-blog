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
@TableName(value = "hfwas-comment")
public class BlogComment {
    private Integer id;
    private Integer docId;
    private String content;
    private Integer parentId;
    private String createBy;
    private LocalDateTime createTime;
    private String updateBy;
    private LocalDateTime updateTime;
    private Integer version;
}
