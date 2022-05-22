-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: PAC
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `integrante`
--

DROP TABLE IF EXISTS `integrante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `integrante` (
  `int_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `int_nome` varchar(30) DEFAULT NULL,
  `int_senha` varchar(30) DEFAULT NULL,
  `int_email` varchar(50) DEFAULT NULL,
  `int_telefone` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`int_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `integrante`
--

LOCK TABLES `integrante` WRITE;
/*!40000 ALTER TABLE `integrante` DISABLE KEYS */;
INSERT INTO `integrante` VALUES (4,'2','','',''),(6,'teste','','','');
/*!40000 ALTER TABLE `integrante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimento`
--

DROP TABLE IF EXISTS `movimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movimento` (
  `mov_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `mov_nome` varchar(50) DEFAULT NULL,
  `mov_responsavel` varchar(50) DEFAULT NULL,
  `mov_data` int(11) DEFAULT NULL,
  `mov_valor` float DEFAULT NULL,
  `mov_tipo` int(11) DEFAULT NULL,
  `mov_projeto` int(11) DEFAULT NULL,
  PRIMARY KEY (`mov_codigo`),
  KEY `mov_tipo` (`mov_tipo`),
  KEY `mov_projeto` (`mov_projeto`),
  CONSTRAINT `movimento_ibfk_1` FOREIGN KEY (`mov_tipo`) REFERENCES `tip_movimento` (`tip_codigo`),
  CONSTRAINT `movimento_ibfk_2` FOREIGN KEY (`mov_projeto`) REFERENCES `projeto` (`proj_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimento`
--

LOCK TABLES `movimento` WRITE;
/*!40000 ALTER TABLE `movimento` DISABLE KEYS */;
INSERT INTO `movimento` VALUES (1,'teste','adm',1,1,NULL,NULL),(2,'teste1','adm',1,1,NULL,NULL),(3,'teste2','adm',1,1,1,NULL),(4,'teste3','adm',1,1,1,2);
/*!40000 ALTER TABLE `movimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto`
--

DROP TABLE IF EXISTS `projeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projeto` (
  `proj_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `proj_nome` varchar(30) DEFAULT NULL,
  `proj_logradouro` varchar(30) DEFAULT NULL,
  `proj_bairro` varchar(30) DEFAULT NULL,
  `proj_municipio` varchar(30) DEFAULT NULL,
  `proj_data_inicio` int(11) DEFAULT NULL,
  `proj_gasto_estimado` double DEFAULT NULL,
  PRIMARY KEY (`proj_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` VALUES (2,'teste','','',NULL,0,0),(3,'teste 2','tes','tes',NULL,0,0);
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tip_movimento`
--

DROP TABLE IF EXISTS `tip_movimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tip_movimento` (
  `tip_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `tip_descricao` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`tip_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tip_movimento`
--

LOCK TABLES `tip_movimento` WRITE;
/*!40000 ALTER TABLE `tip_movimento` DISABLE KEYS */;
INSERT INTO `tip_movimento` VALUES (1,'Entrada'),(2,'Saida');
/*!40000 ALTER TABLE `tip_movimento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-22 18:49:48
