-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 01:46 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.29-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_app`
--

CREATE TABLE `todo_app` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `priority` int(2) NOT NULL,
  `location` varchar(273) NOT NULL,
  `time_start` time DEFAULT '00:00:00',
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todo_app`
--

INSERT INTO `todo_app` (`id`, `name`, `priority`, `location`, `time_start`, `username`, `password`) VALUES
(2, 'Design UI', 76, 'Yogyakarta', '02:05:09', 'ebetap', 'a773a5ec4da12250816a1ce2d3136f3d'),
(3, 'Add Profile Page', 86, 'Jakarta', '04:07:14', 'dosenku', '9cacc1cbf5a9b71c85cb6e197419bdd0'),
(4, 'Create Admin Page', 90, 'Bandung', '00:00:00', 'luffy', 'a773a5ec4da12250816a1ce2d3136f3d'),
(5, 'Create Header', 19, 'Bandung', '00:00:00', 'ebetap', 'a773a5ec4da12250816a1ce2d3136f3d'),
(6, 'Add CTA Button', 19, 'Bandung', '00:00:00', 'ebetap', 'a773a5ec4da12250816a1ce2d3136f3d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_app`
--
ALTER TABLE `todo_app`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_app`
--
ALTER TABLE `todo_app`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
