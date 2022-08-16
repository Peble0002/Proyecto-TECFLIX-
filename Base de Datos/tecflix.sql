-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-08-2022 a las 23:14:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tecflix`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `td_listareproduccion`
--

CREATE TABLE `td_listareproduccion` (
  `id_lista` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `td_video`
--

CREATE TABLE `td_video` (
  `id_Video` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `emisor` varchar(50) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `enlace` varchar(500) NOT NULL,
  `album` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video_lista`
--

CREATE TABLE `video_lista` (
  `id_Video` int(11) DEFAULT NULL,
  `id_lista` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `td_listareproduccion`
--
ALTER TABLE `td_listareproduccion`
  ADD PRIMARY KEY (`id_lista`);

--
-- Indices de la tabla `td_video`
--
ALTER TABLE `td_video`
  ADD PRIMARY KEY (`id_Video`);

--
-- Indices de la tabla `video_lista`
--
ALTER TABLE `video_lista`
  ADD KEY `id_Video` (`id_Video`),
  ADD KEY `id_lista` (`id_lista`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `td_listareproduccion`
--
ALTER TABLE `td_listareproduccion`
  MODIFY `id_lista` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `td_video`
--
ALTER TABLE `td_video`
  MODIFY `id_Video` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `video_lista`
--
ALTER TABLE `video_lista`
  ADD CONSTRAINT `video_lista_ibfk_1` FOREIGN KEY (`id_Video`) REFERENCES `td_video` (`id_Video`),
  ADD CONSTRAINT `video_lista_ibfk_2` FOREIGN KEY (`id_lista`) REFERENCES `td_listareproduccion` (`id_lista`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
