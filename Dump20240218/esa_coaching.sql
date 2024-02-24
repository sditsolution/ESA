-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: esa
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coaching`
--

DROP TABLE IF EXISTS `coaching`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coaching` (
  `idcoaching` int NOT NULL AUTO_INCREMENT,
  `TITLE` mediumtext NOT NULL,
  `DESCRIPTION` longtext NOT NULL,
  `PRICE` decimal(16,0) NOT NULL,
  `PARTICIPANT` int NOT NULL,
  `IMAGE` blob,
  `DATE` datetime NOT NULL,
  `START` datetime NOT NULL,
  `END` datetime NOT NULL,
  `MEDIA` varchar(255) DEFAULT NULL,
  `REVENUE` decimal(16,0) NOT NULL,
  `GAMEID` int NOT NULL,
  `COACHID` int unsigned DEFAULT NULL,
  `PAYMENTESA` decimal(65,0) unsigned DEFAULT NULL,
  `BOOKEDPATICIPANT` int unsigned DEFAULT NULL,
  PRIMARY KEY (`idcoaching`),
  KEY `COACHID_idx` (`COACHID`),
  KEY `GAMEID_idx` (`GAMEID`),
  CONSTRAINT `GAMEID` FOREIGN KEY (`GAMEID`) REFERENCES `game` (`idgame`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coaching`
--

LOCK TABLES `coaching` WRITE;
/*!40000 ALTER TABLE `coaching` DISABLE KEYS */;
INSERT INTO `coaching` VALUES (2,'Test','Das ist ein Test um in die Datenbank zu schreiben.',100,1,NULL,'2024-11-27 00:00:00','2024-02-12 19:00:00','2024-02-12 20:00:00','Discord',10,1,1,90,NULL),(3,'Das ist ein neues Coaching','Hier kommt einer neues Coaching',150,2,NULL,'2024-01-15 00:00:00','2024-02-12 20:30:00','2024-02-12 21:30:00','Discord',15,1,1,135,NULL),(4,'Das ist ein neues Coaching','Das ist ein neues coaching um zu zeigen das es funktioniert',150,2,NULL,'2024-02-15 00:00:00','2024-02-12 20:30:00','2024-02-12 21:30:00','Discord',15,1,1,135,NULL),(5,'Queen Charge Hybrid','Ich bringe ich dir einen neuen Skill bei',100,1,NULL,'2024-02-18 00:00:00','2024-02-18 19:00:00','2024-02-18 20:00:00','Discord',90,2,1,10,NULL);
/*!40000 ALTER TABLE `coaching` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 10:42:14
