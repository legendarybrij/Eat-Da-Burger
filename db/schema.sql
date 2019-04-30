CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    sleepy BOOL DEFAULT false,
    PRIMARY KEY (id)
);

USE burgers_db;
CREATE TABLE todos(
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

USE burgers_db;


INSERT INTO burgers (burger_name,sleepy) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, sleepy) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, sleepy) VALUES ('Pizza Burger', FALSE);

USE burgers_db;
select * from burgers;