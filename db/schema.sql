DROP DATABASE IF EXISTS  sane_db;
CREATE DATABASE sane_db;
USE sane_db;

CREATE TABLE sites (
id INT NOT NULL,
country VARCHAR (255),
state VARCHAR (255),
county VARCHAR (255),	
city VARCHAR (255),	
facility VARCHAR (500),	 
address_1 VARCHAR (500),	
address_2 VARCHAR (255),	
zip INT,
phone_1	INT NOT NULL,
phone_2	INT,
website	VARCHAR (500),
additional_info VARCHAR (600),
primary key (id)															
);