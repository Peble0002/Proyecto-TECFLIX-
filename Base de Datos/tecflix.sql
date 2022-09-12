-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2022 a las 22:49:27
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
-- Estructura de tabla para la tabla `td_video`
--

CREATE TABLE `td_video` (
  `id_Video` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `emisor` varchar(50) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `enlace` varchar(500) NOT NULL,
  `album` varchar(50) NOT NULL,
  `listaReproduccion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `td_video`
--

INSERT INTO `td_video` (`id_Video`, `titulo`, `emisor`, `duracion`, `enlace`, `album`, `listaReproduccion`) VALUES
(2, 'Cabareteando.- Dallas', 'Franco Escamilla', '18:49', 'https://www.youtube.com/watch?v=W3WHyJYG-F0', 'Sin Album', NULL),
(3, 'Rick y Morty Temporada 4 Episodio 10 - Explicación', 'SCA - Entretenimiento', ' 2:32', 'https://www.youtube.com/watch?v=ApJLCj_whHo', 'Sin album', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `td_video`
--
ALTER TABLE `td_video`
  ADD PRIMARY KEY (`id_Video`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `td_video`
--
ALTER TABLE `td_video`
  MODIFY `id_Video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
