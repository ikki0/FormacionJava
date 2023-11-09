CREATE DATABASE IF NOT EXISTS CURSOS
USE CURSOS

-- alumnos de un profesor
SELECT Estudiante.nombre
FROM `Estudiante`
INNER JOIN `Nota`
    ON Estudiante.`Nota_id_nota` = Nota.id_nota
INNER JOIN `Curso` 
    ON Nota.`Curso_id_curso` = `Curso_id_curso`;
INNER JOIN Profesor 
    ON Curso.`Profesor_id_profesor` = id_profesor
GROUP BY Profesor.nombre;

-- total de cursos que imparte un profesor
SELECT COUNT(*)
FROM `Curso`
INNER JOIN `Profesor`
    ON Curso.id_profesor = Profesor.id_profesor

-- total de cursos que ha realizado un alkumno
SELECT COUNT(*)
FROM `Estudiante`
INNER JOIN `Nota`
    ON Estudiante.`Nota_id_nota` = Nota.id_nota
INNER JOIN `Curso`
    ON Curso.id_curso = Curso.id_curso
