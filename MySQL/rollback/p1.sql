START TRANSACTION;

CREATE DATABASE IF NOT EXISTS Libros;
USE Libros;

CREATE TABLE IF NOT EXISTS Autor (
    autor_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL DEFAULT 'pan'
);

CREATE TABLE IF NOT EXISTS Libro (
    libro_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL DEFAULT 'pla',
    autor_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES Autor(autor_id)
);

INSERT INTO Autor (autor_id, nombre) VALUES
(1, 'J.K. Rowling'),
(2, 'George Orwell'),
(3, 'Stephen King');

ROLLBACK;
/* COMMIT; */
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Se ejecuto el rollback correctamente.';