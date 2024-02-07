package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogTagMapper;
import com.hfwas.doc.model.entity.BlogTag;
import com.hfwas.doc.service.BlogTagService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogTagServiceImpl extends ServiceImpl<BlogTagMapper,BlogTag> implements BlogTagService {
}
