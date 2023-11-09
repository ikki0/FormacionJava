show databases;
USE db_autogenerated;

# Ejercicio 1
select postalZip as 'correo postal', region, country as 'país' from myTable;

# Ejercicio 2
select phone from myTable where phone like '811%';

# Ejercicio 3
select * from myTable where country IN ('Italy', 'Spain');

# Ejercicio 4
select count(*) as n_registros from myTable;

# Ejercicio 5
SELECT region as region, country as país, postalZip as código_postal FROM myTable WHERE ID IN (select id from myTable where country IN ('Germany', 'Turkey'));

# Ejercicio 6
SELECT MAX(id) as n_mayor_id from myTable;
SELECT MIN(id) as n_menor_id from myTable;

# Ejercicio 7
select DISTINCT country, count(country) from myTable GROUP BY country;

# Ejercicio 8
select * from myTable order by postalZip LIMIT 10;

# Ejercicio 9
delete from db_autogenerated.myTable WHERE country like 'Singapore';
select * from myTable;