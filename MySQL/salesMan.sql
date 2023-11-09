SHOW DATABASES;
USE SalesMan;

CREATE TABLE IF NOT EXISTS Salesman(
	salesman_id SMALLINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    city VARCHAR(15),
    commision DECIMAL(5.2)
);

CREATE TABLE IF NOT EXISTS Orders(
	order_id SMALLINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    purch_amt DECIMAL(8.2),
    order_date DATE,
    customer_id SMALLINT,
    salesman_id SMALLINT,
    FOREIGN KEY (salesman_id)
        REFERENCES Salesman(salesman_id),
    FOREIGN KEY(customer_id)
        REFERENCES Customer(customer_id)
);

CREATE TABLE IF NOT EXISTS Customer (
    customer_id SMALLINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_name VARCHAR(30) NOT NULL DEFAULT 'prueba name customer',
    city VARCHAR(15) NOT NULL DEFAULT 'prueba city',
    grade NUMERIC(3) NOT NULL DEFAULT 1
);

SHOW TABLES;
DESC Orders

-- Contar total registro Orders
SELECT COUNT(*)
FROM Orders;

-- mostrar customer con nombres distintos no repetidos
SELECT DISTINCT(customer_name)
FROM Customer;

-- ORDERNAR Salesman en función de las ventas que han realizado
SELECT *
FROM `Salesman`
ORDER BY commision;

-- Mostrar los primeros 5 Customer ordenados por IDENTIFIED
SELECT *
FROM `Customer`
ORDER BY customer_id
LIMIT 5;

-- ELIMINAR REGISTRO QUE TENGA purch_amt mayor
SELECT MAX(purch_amt) AS max_purch_amt INTO @max_purch_amt
FROM Orders;
DELETE FROM Orders
WHERE purch_amt = @max_purch_amt;


-- Eliminar regustrio con el menor purch_amt menor
SELECT MIN(purch_amt) INTO @purch_amt_min
FROM Orders

DELETE
FROM Orders
WHERE purch_amt = @purch_amt_min