package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogCommentMapper;
import com.hfwas.doc.model.entity.BlogComment;
import com.hfwas.doc.service.BlogCommentService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogCommentServiceImpl extends ServiceImpl<BlogCommentMapper, BlogComment> implements BlogCommentService {
}
