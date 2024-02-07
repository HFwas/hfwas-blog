package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogDocMapper;
import com.hfwas.doc.model.entity.BlogDoc;
import com.hfwas.doc.service.BlogDocService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogDocServiceImpl extends ServiceImpl<BlogDocMapper, BlogDoc> implements BlogDocService {
}
