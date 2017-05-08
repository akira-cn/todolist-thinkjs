# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: todolist
# Generation Time: 2017-05-08 07:01:23 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table tdl_task
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tdl_task`;

CREATE TABLE `tdl_task` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL COMMENT '任务描述',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '0-待办，1-已办，2-删除',
  `from_time` datetime DEFAULT NULL COMMENT '起始时间',
  `to_time` datetime DEFAULT NULL COMMENT '结束时间',
  `update_time` datetime DEFAULT NULL COMMENT '状态变更时间',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `uid` int(11) DEFAULT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table tdl_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tdl_user`;

CREATE TABLE `tdl_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '' COMMENT '用户名称',
  `nickname` varchar(11) NOT NULL DEFAULT '' COMMENT '用户昵称',
  `gid` varchar(256) NOT NULL DEFAULT '' COMMENT '第三方社交帐号ID',
  `type` int(11) NOT NULL COMMENT '登录类型 0-github',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `create_ip` varchar(256) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '用户状态：0-正常，1-异常',
  `email` varchar(256) DEFAULT NULL COMMENT '用户邮箱',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
