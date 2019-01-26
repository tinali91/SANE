DROP DATABASE IF EXISTS  sane_db;
CREATE DATABASE sane_db;
USE sane_db;

CREATE TABLE sites (
id INT AUTO_INCREMENT NOT NULL,
country VARCHAR (255),
state VARCHAR (255),
county VARCHAR (255),	
city VARCHAR (255),	
facility VARCHAR (500),	 
address VARCHAR (500),		
zip INT,
latitude DECIMAL (9, 6),
longitude DECIMAL (9, 6),
phone_1	VARCHAR (255) NOT NULL,
phone_2	VARCHAR (255),
website	VARCHAR (500),
additional_info VARCHAR (600),
primary key (id)															
);

CREATE TABLE users (
 id INT(11) NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL,
 password VARCHAR(255) NOT NULL,
 created DATETIME NOT NULL,
 modified DATETIME NOT NULL,
 PRIMARY KEY (id)
);