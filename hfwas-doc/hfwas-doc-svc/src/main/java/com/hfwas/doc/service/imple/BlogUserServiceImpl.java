package com.hfwas.doc.service.imple;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hfwas.doc.mapper.BlogUserMapper;
import com.hfwas.doc.model.entity.BlogUser;
import com.hfwas.doc.service.BlogUserService;
import org.springframework.stereotype.Service;

/**
 * @author houfei
 * @package com.hfwas.doc.service
 * @date 2024/2/7
 */
@Service
public class BlogUserServiceImpl extends ServiceImpl<BlogUserMapper,BlogUser> implements BlogUserService {
}
