package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogTagRelateMapper;
import com.hfwas.doc.model.entity.BlogTagRelate;
import com.hfwas.doc.service.BlogTagRelateService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogTagRelateServiceImpl extends ServiceImpl<BlogTagRelateMapper,BlogTagRelate> implements BlogTagRelateService {
}
