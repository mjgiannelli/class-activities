DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE prices (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  price DECIMAL(10,2)
);

CREATE TABLE books(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  price INTEGER,
  in_stock BOOLEAN,
  FOREIGN KEY (price) REFERENCES prices(id) ON DELETE SET NULL
);

INSERT INTO prices (price)
VALUES (14.99);

INSERT INTO books (book_name, price, in_stock)
VALUES ('Lord of the Flies', 1, true);