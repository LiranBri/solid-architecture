ALTER USER root IDENTIFIED WITH mysql_native_password BY 'mamram';

CREATE DATABASE `core`;
USE `core`;

CREATE TABLE `segment` (
  `segment_id`  INT(11) NOT NULL,
  `name`        VARCHAR(300) NOT NULL,
  `users`       INT(10) NOT NULL,
  `createdAt`   TIMESTAMP NULL DEFAULT NULL,
  `updatedAt`   TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`segment_id`)
) ENGINE=InnoDB;

INSERT INTO `segment` (`segment_id`, `name`, `users`) VALUES
(1, 'segment #1', 10),
(2, 'segment #2', 20),
(3, 'segment #3', 30);
