package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogTagClassificationMapper;
import com.hfwas.doc.model.entity.BlogTagClassification;
import com.hfwas.doc.service.BlogTagClassificationService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogTagClassificationServiceImpl extends ServiceImpl<BlogTagClassificationMapper, BlogTagClassification> implements BlogTagClassificationService {
}
