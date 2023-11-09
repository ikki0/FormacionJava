/* 
    Autor: Alan
    Fecha: 08/11/2023
 */

USE DB_MOVIES;
-- Seleccionar todos campos de la tabla directores
SELECT * FROM directors;


-- Seleccionar únicamente el nombre de la tabla directores y añadir alias 'nombre_del_director'
SELECT name as nombre_del_director from directors;

-- Ordenar tabla directors por el name en orden ascendente;

SELECT * 
FROM directors
ORDER BY name;

-- Selecionar todas las películas de la tabla movies donde el título tenga dos puntos
SELECT *
FROM `movies`
WHERE title LIKE '%:%';

-- Seleccionar todas las 'stars' donde el 'name' empieze por la letra 'm'
SELECT *
FROM stars
WHERE name like 'm%';

-- Selecionar todas las 'stars' donode el 'name' donde la penultima letra sea una e y el último puede ser cualquier carácter
SELECT *
FROM stars
WHERE SUBSTRING(name,  LENGTH(name) - 1,1 ) LIKE 'e' 

-- Seleccionar todos los 'year' de 'movies' sin repetir 'year'
SELECT DISTINCT(year) 
FROM movies


-- Mostrar total de campos 'year' con el alias TOTAL
SELECT COUNT(DISTINCT(year)) AS TOTAL
FROM movies

-- Mostrar pelicula pulp fiction
SELECT *
FROM movies
WHERE title like 'pulp fiction';

-- SELECCIONAR PELICULA CON ID = 6
SELECT * 
FROM movies
WHERE id = 6;

-- SELECCIONAR TODAS LAS PELÍCUÑAS QUE TENGA UN ID SUPERIOR A 3
SELECT *
FROM movies
WHERE ID > 3;

-- SELECCIONAR PELICULAS CON ID INFERIOR O IGUAL A 5 
SELECT *
FROM movies
WHERE ID <= 5;

-- SELECCIONA PELCULAS CON ID ENTRE 3 Y 6 CON OPERADORES ARÍTMETICOS
SELECT *
FROM movies
WHERE ID >= 3 && ID <= 6

-- SELECCIONA PELCULAS CON ID ENTRE 3 Y 6 CON BETWEEN
SELECT * 
FROM movies
WHERE ID BETWEEN 3 AND 6 

-- SELECCIONA TODAS LAS PELICULAS QUE NO SALIERON EN 2013 DE DOS MANERAS DIFERENTES
SELECT *
FROM movies
WHERE year != 2013;

SELECT *
FROM movies
WHERE year NOT LIKE 2013;

-- SELECCIONA TODAS LAS PELICULAS DONDE EL 'year' sea 1895, 1994, 1997
SELECT *
FROM movies
WHERE year IN (1895, 1994, 1997);

-- SELECCIONA TODAS LAS PELÍCULAS DONDE el 'year' no sea 1994, 2013, 2014;
SELECT *
FROM movies 
WHERE year NOT IN (1994,2013, 2014);

-- SELECCIONA TODAS LAS 'movies' DONDE EL 'year' sea superior a '2000' o que el 'imdb_rating' sea superior a 8.5
SELECT * 
FROM movies
WHERE year > 2000 OR imdb_rating > 8.5;

-- SELECCIONA TODAS LAS 'movies' DONDE EL 'year' sea inferior a 2005 o que el 'imdb_rating' sea superior a 8.5
SELECT *
FROM movies
WHERE year < 2005 OR imdb_rating > 8.5;

-- SELECCIONAR TODAS LAS 'movies' ordenado por 'year' de forma ascendente , en caso de repetir 'year' ordenador por imdb_rating de forma descendente
SELECT * 
FROM movies
ORDER BY year ASC, imdb_rating DESC;

-- Mostraar únicamente 3 'stars'
SELECT *
FROM stars
LIMIT 3;

-- MOSTRAR ÚNICAMENTE LAS 5 'movies' que tengan el idmb_rating más alto
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 5;

-- MOSTRAR EL MÁXIMO DE 'imdb_rating' como MAX_RATING y el MÍNIMO COMO MIN_RATING
SELECT MAX(imdb_rating) AS MAX_RATING, MIN(imdb_rating) AS MIN_RATING
FROM movies;

-- MOSTRAR LA MEDIA DE 'imdb_rating' COMO RATING_AVG
SELECT AVG(imdb_rating) AS RATING_AVG
FROM movies;

-- MOSTRAR LA MEDIA DE 'imdb_rating' COMO RATING_AVG ÚNCAMENTE CON DOS DECIMALES
SELECT FORMAT(AVG(imdb_rating),2) AS RATING_AVG
FROM movies;

-- MOSTRAR NTOTAL 'directors'
SELECT COUNT(*)
FROM directors;

-- MOSTRAR TODOS DATOS DE 'imdb_rating' , EL RESULTADO DEBERÁ SER REDONDEADO A 2 DECIMALES Y TENDRÁ EL ALIAS RATING_POINTS
SELECT ROUND(SUM(imdb_rating),2) AS RATING_POINTS
FROM movies;

-- MOTRAR TODAS LAS 'movies' que superen la media de todas las peliculas de 'imdb_rating'
SELECT *
FROM movies
WHERE imdb_rating > (
    SELECT AVG(imdb_rating)
    FROM movies
);

-- MOSTRAR TODAS LAS 'movies' que no tengan el id entre el rango 2 y 4 sin utilizar OPERADORES ARÍTMETICOS
SELECT *
FROM movies
WHERE id NOT BETWEEN 2 AND 4;

-- MOSTRAR EL DIRECTOR DE TODAS LAS PELÍCULAS , EL TITULO DE LA PELICULA Y ORDENARLOS POR EL ID DEL DIRECTOR
SELECT directors.name AS DIRECTOR, movies.title AS TITULO
FROM movies
INNER JOIN movies_directors ON movies.id = movies_directors.movies_id
INNER JOIN directors ON directors.id = movies_directors.directors_id
ORDER BY movies_directors.directors_id;

-- MOSTRAR 'title' y name de los stars que haya participado en la película pulp fiction
SELECT movies.title , stars.name
FROM movies
INNER JOIN movies_stars 
    ON  movies.id = movies_stars.movies_id
INNER JOIN stars
    ON stars.id = movies_stars.stars_id
WHERE movies.title like 'pulp fiction'


-- MOSTRAR TITULO, GENERO, ACTOR Y DIRECTOR AGRUPADOS POR EL TITULO DE LA PELÍCULAS
SELECT movies.title as TITULO, genres.name AS GENERO, stars.name AS ACTOR, directors.name AS DIRECTOR
FROM movies
INNER JOIN movies_genres
    ON movies.id = movies_genres.movies_id
INNER JOIN genres
    ON genres.id = movies_genres.genres_id
INNER JOIN movies_stars
    ON movies.id = movies_stars.movies_id
INNER JOIN stars
    ON stars.id = movies_stars.stars_id
INNER JOIN movies_directors
    ON movies.id = movies_directors.movies_id
INNER JOIN directors
    ON directors.id = movies_directors.directors_id
ORDER BY movies.title


-- MOSTRAR TITULO UNA ÚNICA VEZ DE TODAS LAS PELICULAS A JUNTO LA SUMA DE TODOS LOS GENEROS QUE TIENE
SELECT movies.title as TITULO, COUNT(genres.name) AS GENERO
FROM movies
INNER JOIN movies_genres
    ON movies.id = movies_genres.movies_id
INNER JOIN genres
    ON genres.id = movies_genres.genres_id
GROUP BY movies.title;

-- MOSTRAR TÍTULO DE LA PELÍCULA JUNTO CON EL IMDB_RATING, INFERIOR A 5 INSUFICIENTE, 5 SUFICIENTE, MAYOR A 5 Y INFERIOR A 6 SUFIECIENTE, MAYOR A 6 PERO INFERIOR A 7 BIEN , MAYOR A 7 PERO INFERIOR A 8 NOTABLE Y MAYOR A 8 EXCELENTE
SELECT movies.title AS TITULO,
    CASE 
        WHEN movies.imdb_rating < 5 THEN 'INSUFICIENTE'
        WHEN movies.imdb_rating >= 5 AND movies.imdb_rating <= 6 THEN 'SUFICIENTE'
        WHEN movies.imdb_rating >= 6 AND movies.imdb_rating < 7 THEN 'BIEN'
        WHEN movies.imdb_rating >= 7 AND movies.imdb_rating <=8 THEN 'NOTABLE'
        WHEN movies.imdb_rating > 8 THEN 'EXCELENTE'
END AS NOTA_PELICULA
FROM movies

 
 -- Agrega un valor entre 0 y 5 y otro superior a 10 para testear, siguiendo el ejercicio anterior
UPDATE movies 
SET imdb_rating = 11
WHERE id = 1;

UPDATE movies
SET imdb_rating = 2
WHERE id = 3;

SELECT movies.title AS TITULO,
    CASE 
        WHEN movies.imdb_rating >= 0 AND movies.imdb_rating < 5 THEN 'INSUFICIENTE'
        WHEN movies.imdb_rating >= 5 AND movies.imdb_rating <= 6 THEN 'SUFICIENTE'
        WHEN movies.imdb_rating >= 6 AND movies.imdb_rating < 7 THEN 'BIEN'
        WHEN movies.imdb_rating >= 7 AND movies.imdb_rating <=8 THEN 'NOTABLE'
        WHEN movies.imdb_rating > 8 AND movies.imdb_rating <= 10 THEN 'EXCELENTE'
    ELSE 'ERROR'
END AS NOTA_PELICULA
FROM movies