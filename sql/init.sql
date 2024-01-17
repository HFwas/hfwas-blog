DROP TABLE IF EXISTS `hfwas-comment`;
CREATE TABLE `hfwas-comment` (
                                 `id` bigint(20) NOT NULL,
                                 `doc_id` bigint(20) NOT NULL,
                                 `content` varchar(128) NOT NULL,
                                 `parent_id` bigint(20) NOT NULL,
                                 `create_by` varchar(32) NOT NULL COMMENT '创建人',
                                 `create_time` datetime NOT NULL COMMENT '创建时间',
                                 `update_by` varchar(32) NOT NULL COMMENT '更新人',
                                 `update_time` datetime NOT NULL COMMENT '更新时间',
                                 `version` int(10) NOT NULL DEFAULT '0' COMMENT '乐观锁',
                                 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `hfwas-user`;
CREATE TABLE `hfwas-user` (
                              `id` bigint(20) NOT NULL COMMENT '主键ID',
                              `username` varchar(20) NOT NULL COMMENT '用户名称',
                              `real_name` varchar(20) DEFAULT NULL COMMENT '真实姓名',
                              `email` varchar(50) DEFAULT NULL COMMENT '邮箱地址',
                              `phone` varchar(11) NOT NULL COMMENT '手机号码',
                              `avator` varchar(56) NOT NULL COMMENT '图像',
                              `birthday` varchar(20) DEFAULT NULL COMMENT '出生年月',
                              `summary` varchar(128) DEFAULT NULL COMMENT '自我简介',
                              `login_count` int(11) NOT NULL,
                              `login_time` datetime NOT NULL,
                              `login_ip` varchar(30) NOT NULL,
                              `state` tinyint(1) NOT NULL,
                              `qq` bigint(20) DEFAULT NULL,
                              `wechatv` varchar(128) DEFAULT NULL,
                              `github` varchar(128) DEFAULT NULL,
                              `gitee` varchar(128) DEFAULT NULL,
                              `create_by` varchar(32) NOT NULL COMMENT '创建人',
                              `create_time` datetime NOT NULL COMMENT '创建时间',
                              `update_by` varchar(32) NOT NULL COMMENT '更新人',
                              `update_time` datetime NOT NULL COMMENT '更新时间',
                              `version` int(10) NOT NULL DEFAULT '0' COMMENT '乐观锁',
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `hfwas_comment` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `hfwas_doc`;
CREATE TABLE `hfwas_doc` (
                             `id` bigint(20) NOT NULL,
                             `title` varchar(128) NOT NULL,
                             `content` longtext NOT NULL,
                             `collect` bigint(20) NOT NULL DEFAULT '0',
                             `likes` int(11) NOT NULL DEFAULT '0',
                             `read` int(11) NOT NULL DEFAULT '0',
                             `status` tinyint(1) NOT NULL DEFAULT '0',
                             `summary` varchar(128) NOT NULL,
                             `origin` tinyint(1) NOT NULL DEFAULT '0',
                             `author` varchar(20) DEFAULT NULL,
                             `source` varchar(20) NOT NULL,
                             `publich` tinyint(1) NOT NULL DEFAULT '0',
                             `sort` int(11) NOT NULL DEFAULT '0',
                             `create_by` varchar(32) NOT NULL COMMENT '创建人',
                             `create_time` datetime NOT NULL COMMENT '创建时间',
                             `update_by` varchar(32) NOT NULL COMMENT '更新人',
                             `update_time` datetime NOT NULL COMMENT '更新时间',
                             `version` int(10) NOT NULL DEFAULT '0' COMMENT '乐观锁',
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `hfwas_tag`;
CREATE TABLE `hfwas_tag` (
                             `id` bigint(20) NOT NULL COMMENT '主键ID',
                             `classification_id` bigint(20) DEFAULT NULL,
                             `name` varchar(256) NOT NULL COMMENT '标签名',
                             `sort_id` smallint(5) NOT NULL DEFAULT '1' COMMENT '排序号',
                             `description` varchar(1024) DEFAULT NULL COMMENT '备注',
                             `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '状态 0正常 1锁定',
                             `create_by` varchar(32) NOT NULL COMMENT '创建人',
                             `create_time` datetime NOT NULL COMMENT '创建时间',
                             `update_by` varchar(32) NOT NULL COMMENT '更新人',
                             `update_time` datetime NOT NULL COMMENT '更新时间',
                             `version` int(10) NOT NULL DEFAULT '0' COMMENT '乐观锁',
                             `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '逻辑删除 0正常 1删除',
                             `colour` varchar(255) DEFAULT NULL COMMENT '标签颜色',
                             `code` varchar(64) DEFAULT NULL COMMENT '标签编号',
                             PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='标签表';

DROP TABLE IF EXISTS `hfwas_tag_classification`;
CREATE TABLE `hfwas_tag_classification` (
                                            `id` bigint(20) NOT NULL COMMENT '主键ID',
                                            `name` varchar(256) NOT NULL COMMENT '标签名',
                                            `sort_id` smallint(5) NOT NULL DEFAULT '1' COMMENT '排序号',
                                            `description` varchar(1024) DEFAULT NULL COMMENT '备注',
                                            `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '状态 0正常 1锁定',
                                            `create_by` varchar(32) NOT NULL COMMENT '创建人',
                                            `create_time` datetime NOT NULL COMMENT '创建时间',
                                            `update_by` varchar(32) NOT NULL COMMENT '更新人',
                                            `update_time` datetime NOT NULL COMMENT '更新时间',
                                            `version` int(10) NOT NULL DEFAULT '0' COMMENT '乐观锁',
                                            `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '逻辑删除 0正常 1删除',
                                            `code` varchar(64) NOT NULL COMMENT '分类编号',
                                            PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='标签分类表';

DROP TABLE IF EXISTS `hfwas_tag_relate`;
CREATE TABLE `hfwas_tag_relate` (
                                    `id` bigint(20) NOT NULL,
                                    `tag_id` bigint(20) NOT NULL COMMENT '标签id',
                                    `relate_type_code` varchar(63) NOT NULL COMMENT '关联类型',
                                    `relate_instance_id` bigint(20) DEFAULT NULL COMMENT '关联实例id',
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
