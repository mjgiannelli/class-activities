DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL
);

CREATE TABLE categories(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE prices(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO books (id, book_name)
VALUES 
  (1, 'Angelas Ashes'),
  (2, 'Green Eggs and Ham'),
  (3, 'The Crucible'),
  (4, 'Lord of the Rings'),
  (5, 'Lord of the Flies');

INSERT INTO prices (id, price)
VALUES
  (1, 11.95),
  (2, 23.87),
  (3, 9.97),
  (4, 21.99),
  (5, 14.99);

INSERT INTO categories (id, category_name)
VALUES
  (1, 'Drama'),
  (2, 'Childrens'),
  (3, 'Awesome'),
  (4, 'Epic Nerd Adventure'),
  (5, 'Stranded');
