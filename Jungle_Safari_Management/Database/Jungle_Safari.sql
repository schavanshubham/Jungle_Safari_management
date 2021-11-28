-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: jungle_safari
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `B_ID` int NOT NULL AUTO_INCREMENT,
  `U_ID` int DEFAULT NULL,
  `Pkg_ID` int DEFAULT NULL,
  `Time_Slot_ID` int DEFAULT NULL,
  `Visit_Date` date DEFAULT NULL,
  `No_of_Adults` int DEFAULT NULL,
  `No_of_Child` int DEFAULT NULL,
  PRIMARY KEY (`B_ID`),
  KEY `Fk_U_ID` (`U_ID`),
  KEY `Fk_Pkg_ID` (`Pkg_ID`),
  KEY `FK_Time_Slot_ID` (`Time_Slot_ID`),
  CONSTRAINT `Fk_Pkg_ID` FOREIGN KEY (`Pkg_ID`) REFERENCES `package_info` (`Pkg_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_Time_Slot_ID` FOREIGN KEY (`Time_Slot_ID`) REFERENCES `timeslot` (`Time_Slot_ID`) ON DELETE CASCADE,
  CONSTRAINT `Fk_U_ID` FOREIGN KEY (`U_ID`) REFERENCES `user` (`U_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,2,1,1,'2021-03-03',2,3),(35,2,1,2,'2021-09-25',3,2),(46,2,2,2,'2021-09-30',6,3);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_info`
--

DROP TABLE IF EXISTS `package_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_info` (
  `Pkg_ID` int NOT NULL,
  `Pkg_Name` varchar(45) NOT NULL,
  `Validity_Date` date NOT NULL,
  `Pkg_Price_Frgn` int NOT NULL,
  `Pkg_Price_Ind` int NOT NULL,
  `Max_People` int NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`Pkg_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_info`
--

LOCK TABLES `package_info` WRITE;
/*!40000 ALTER TABLE `package_info` DISABLE KEYS */;
INSERT INTO `package_info` VALUES (1,'Diwali Package','2021-04-30',1000,700,6,'For Bird Watching +gypsy+guide'),(2,'Seasonal Package','2021-05-03',1200,1000,6,'For Jungle Safari+ Bird watching+gypsy+guide');
/*!40000 ALTER TABLE `package_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `P_ID` int NOT NULL AUTO_INCREMENT,
  `B_ID` int DEFAULT NULL,
  `Amount` decimal(9,2) DEFAULT NULL,
  `P_Mode` varchar(45) DEFAULT NULL,
  `P_Status` varchar(45) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `T_ID` int DEFAULT NULL,
  PRIMARY KEY (`P_ID`),
  KEY `Fk_B_ID` (`B_ID`),
  CONSTRAINT `Fk_B_ID` FOREIGN KEY (`B_ID`) REFERENCES `booking` (`B_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeslot`
--

DROP TABLE IF EXISTS `timeslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timeslot` (
  `Time_Slot_ID` int NOT NULL,
  `Time_Slot_Name` varchar(45) NOT NULL,
  PRIMARY KEY (`Time_Slot_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeslot`
--

LOCK TABLES `timeslot` WRITE;
/*!40000 ALTER TABLE `timeslot` DISABLE KEYS */;
INSERT INTO `timeslot` VALUES (1,'Morning'),(2,'Afternoon');
/*!40000 ALTER TABLE `timeslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `U_ID` int NOT NULL AUTO_INCREMENT,
  `Fname` varchar(45) NOT NULL,
  `Lname` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Contact_No` varchar(45) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `City` varchar(45) NOT NULL,
  `U_Type` varchar(45) DEFAULT 'user',
  `Nationality` varchar(45) NOT NULL,
  PRIMARY KEY (`U_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin','admin@gmail.com','admin','9988453432','Male','Mumbai','admin','india'),(2,'Sudarshan','Kale','sid@gmail.com','1234','9867545675','Male','Pune','user','india'),(3,'Nilima','Mahale','nilima@gmail.com','1234','7864345676','Female','Pune','user','india'),(4,'Shubham','Chavan','shubham@gmail.com','4455','7789656765','Male','Mumbai','user','india'),(5,'Ameya','Bharote','ameya@yahoo.com','9977','7709452768','Male','Nashik','user','india'),(6,'Kunal','Patil','kunal@yahoo.com','8433','8565342454','Male','Aurangabad','user','india'),(7,'William','Jonsan','w@gmail.com','1233','2345643324','Male','Shikago','user','foreigner'),(8,'Herbert','Stallings','herbert@gmail.com','6733','3367876575','Male','Newyork','user','foreigner'),(9,'Pooja','Aherkar','pooja@gmail.com','7655','9538498765','Female','Mumbai','user','india'),(10,'Meena','Chitale','meena@yahoo.com','1555','9423087564','Female','Nahik','user','india'),(11,'dev','Saxena','dev@yahoo.com','3922','9745367856','Male','Pune','user','india'),(12,'Devendra','Waghulde','devendra@gmail.com','9877','9850792470','Male','Pune','user','india');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-27 17:50:19
