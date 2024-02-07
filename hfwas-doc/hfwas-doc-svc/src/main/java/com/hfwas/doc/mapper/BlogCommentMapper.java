package com.hfwas.doc.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hfwas.doc.model.entity.BlogComment;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author houfei
 * @package com.hfwas.doc.mapper
 * @date 2024/2/7
 */
@Mapper
public interface BlogCommentMapper extends BaseMapper<BlogComment> {
}
