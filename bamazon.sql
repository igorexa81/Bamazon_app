DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("PS 4", "Electronics", 200.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("XDDESIGN Backpack", "School Supplies", 59.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Tumi Wallet", "Accessories", 50.25, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Casio watch", "Accessories", 33.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Canon Laser Printer", "Electronics", 399.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Toleriane Ultra Night Cream for Sensitive Skin", "Cosmetics", 99.55, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Purifying Cleanser", "Cosmetics", 70, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Spongebob band aid", "Health", .68, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("JavaScript &Jquery Book", "Education", 89.53, 5);

SELECT * FROM products;



