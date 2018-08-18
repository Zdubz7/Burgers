DROP DATABASE IF EXISTS sh62ekazl622fjw9;
CREATE database sh62ekazl622fjw9;

USE sh62ekazl622fjw9;

CREATE TABLE burgers (
	id INT(10) AUTO_INCREMENT,
	burger_name VARCHAR(100) NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);