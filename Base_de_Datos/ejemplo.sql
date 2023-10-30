/* *****************************************************
//  INS JOAN D'AUSTRIA
//	CFGS DAW
//	M2: Bases de dades. UF2: Llenguatge SQL
//	PRÀCTICA UF2. FASE 2
//	AUTOR: Alan Rojas
//	DATA: 20/01/2022
****************************************************** */

/*                ATENCIÓ:                   */
/*  NO MODIFIQUEU RES ENTRE AQUESTA LINEA I LA 60 */

/* BORRAT DE TAULES */
/* QUAN ESTIGUIN CREADES LES CLAUS FORANES CALDRÀ TENIR PRESENT L'ORDRE: */
/* PARTIDO PREVIA A EQUIP. ESTADISTICAS PREVIA A JUGADOR. JUGADOR PREVIA A EQUIP */
DROP TABLE IF EXISTS Equipo; 
DROP TABLE IF EXISTS Jugador; 
DROP TABLE IF EXISTS Estadisticas; 
DROP TABLE IF EXISTS Partido;

/* CREACIO DE LA TAULA EQUIP */
CREATE TABLE Equipo (
  Nombre varchar(20),
  Ciudad varchar(20) NOT NULL,
  Conferencia varchar(4) NOT NULL,
  Division varchar(9) NOT NULL
)engine=innodb;

/* CREACIO DE LA TAULA JUGADOR */
CREATE TABLE Jugador (
  codigo mediumint,
  Nombre varchar(30) NOT NULL,
  Procedencia varchar(20),
  Altura char(4),
  Peso smallint unsigned,
  Posicion varchar(5),
  Nombre_equipo varchar(20) NOT NULL
)engine=innodb;

/* CREACIO DE LA TAULA ESTADISTICAS */
CREATE TABLE Estadisticas (
  codigo mediumint,
  temporada char(5) not null,
  Puntos_por_partido float DEFAULT 0.0, 
  Asistencias_por_partido float DEFAULT 0.0, 
  Tapones_por_partido float DEFAULT 0.0, 
  Rebotes_por_partido float DEFAULT 0.0
)engine=innodb;

/* CREACIO DE LA TAULA PARTIDO */
CREATE TABLE Partido (
  codigo mediumint unsigned,
  equipo_local varchar(20) NOT NULL,
  equipo_visitante varchar(20) NOT NULL,
  puntos_local smallint unsigned,
  puntos_visitante smallint unsigned,
  temporada char(5) NOT NULL
)engine=innodb;

/* AFEGIU A PARTIR D'AQUI LA VOSTRA SOLUCIO A LA FASE 2 */

/* taula: Equipo */
/* Agregar clave primaria */
alter table Equipo
add constraint pk_Equipo
primary key(Nombre);

/* Columna: Conferencia */
alter table Equipo
add constraint check_Conferencia 
check(Conferencia='East' or 'West');

/* Columna Division */
alter table Equipo 
add constraint check_Division 
check(Division='Atlantic' or Division = 'Central' or Division = 'SouthEast' 
or Division = 'NorthWest' or Division = 'Pacific' or Division = 'SouthWest');

/* !Tabla: Jugador */

/* Agregar clave primária */
alter table Jugador
add constraint pk_Jugador
primary key(codigo);

/* Agregar auto-increment */
alter table Jugador
modify column codigo mediumint auto_increment;

/* posicion */
alter table Jugador
add constraint check_Posicion check(Posicion = 'G' or Posicion = 'F' or Posicion = 'C' or Posicion = 'G-F' or Posicion = 'G-C' or Posicion = 'F-G' or Posicion = 'F-C' or Posicion = 'C-G' or Posicion = 'C-F' or Posicion = 'G-F-C' or Posicion = 'G-C-F' or Posicion = 'F-G-C' or Posicion = 'F-C-G' or Posicion = 'C-G-F' or Posicion = 'C-F-G');

/* Clave Foránea */
alter table Jugador
add constraint fk_rep_Equipo 
foreign key (Nombre_equipo) references Equipo(Nombre)
on delete restrict;


/* !!!Tabla Estadísticas */

/* Agregar Clave Primária */
alter table Estadisticas
add constraint pk_Estadisticas
primary key(codigo, temporada);


/* Puntos_por_partido
primero el tipo de dato, segundo restriccion No valor Negativo, tercero default, //cuarto not null */
alter table Estadisticas
modify column Puntos_por_partido float unsigned default 0 ;

/* Asistencias por partido */
alter table Estadisticas
modify column Asistencias_por_partido float unsigned default 0;

/* Tapones_por_partido */
alter table Estadisticas
modify column Tapones_por_partido float unsigned default 0;

/* Rebotes_por_partido */
alter table Estadisticas
modify column Rebotes_por_partido float unsigned default 0;

/* Clave Foránea */
alter table Estadisticas
add constraint fk_rep_jugador
foreign key (codigo) references Jugador(codigo)
on delete cascade;

/* !Tabla Partido */

/* clave primaria */
alter table Partido
add constraint pk_Partido primary key(codigo);

/* Agregar auto-increment */
alter table Partido 
modify column codigo mediumint unsigned auto_increment ;

/* Agregar clave foránea */
alter table Partido
add constraint fk_equipo_local
foreign key (equipo_local) references Equipo(Nombre)
on delete cascade,

add constraint fk_equipo_visitante
foreign key (equipo_visitante) references Equipo(Nombre)
on delete restrict;
