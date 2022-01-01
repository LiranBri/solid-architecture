ALTER USER root IDENTIFIED WITH mysql_native_password BY 'mamram';

CREATE DATABASE `core`;
USE `core`;

CREATE TABLE `boards` (
  `board_id`    INT(11) NOT NULL,
  `title`       VARCHAR(300) NOT NULL,
  `createdAt`   TIMESTAMP NULL DEFAULT NULL,
  `updatedAt`   TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB;

CREATE TABLE `persons` (
  `person_id`   INT(11) NOT NULL,
  `firstName`   VARCHAR(300) NOT NULL,
  `lastName`    VARCHAR(300) NOT NULL,
  `team`        VARCHAR(300) NOT NULL,
  `board_id`   INT(11) NOT NULL,
  `createdAt`   TIMESTAMP NULL DEFAULT NULL,
  `updatedAt`   TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB;


INSERT INTO `boards` (`board_id`, `title`) VALUES
(1, 'board #1'),
(2, 'board #2'),
(3, 'board #3');

INSERT INTO `persons` (`person_id`, `firstName`, `lastName`, `team`, `board_id`) VALUES
(1, 'Eddard', 'Stark', 'north', 3),
(2, 'Catelyn', 'Stark', 'north', 3),
(3, 'Jaime', 'Lannister', 'south', 3),
(4, 'Cersei', 'Lannister', 'south', 3);
