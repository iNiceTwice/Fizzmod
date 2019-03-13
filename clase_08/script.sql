/*
Crear base de datos

Seleccionar una base de datos

Crear una tabla

Crear un registro

Actualizar un registro 

Borrar un registro

Consultar registros

*/

-- Crear base de datos
CREATE DATABASE `node`;
create database node;

-- Seleccionar una base de datos
USE `node`;
use node;


-- Crear una tabla
-- CREATE TABLE `alumnos`();
create table alumnos(
	id tinyint auto_increment not null,
	nombre varchar(30) not null,
    edad tinyint unsigned not null,
    fecha_creacion date not null,
    email varchar(50) unique ,
    primary key(id)
);

select * from alumnos;
desc alumnos;
