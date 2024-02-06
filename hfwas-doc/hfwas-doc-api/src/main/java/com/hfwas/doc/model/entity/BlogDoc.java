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
@TableName(value = "hfwas_doc")
public class BlogDoc {
    private Integer id;
    private String title;
    private long content;
    private Integer collect;
    private Integer likes;
    private Integer read;
    private Integer status;
    private String summary;
    private Integer origin;
    private String author;
    private String source;
    private Integer publich;
    private Integer sort;
    private String create_by;
    private LocalDateTime createTime;
    private String updateBy;
    private LocalDateTime updateTime;
    private Integer version;

}
