-- MySQL Script generated by MySQL Workbench
-- Fri Nov  3 13:39:18 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Movies
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Movies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Movies` ;
USE `Movies` ;

-- -----------------------------------------------------
-- Table `Movies`.`Movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Movie` (
  `id_movie` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `year` INT NULL,
  `image_url` VARCHAR(255) NULL,
  `certificate` VARCHAR(45) NULL,
  `runtime` INT NULL,
  `imdb_rating` FLOAT NULL,
  `description` TEXT NULL,
  `metascore` INT NULL,
  `votes` INT NULL,
  `gross` INT NULL,
  PRIMARY KEY (`id_movie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Director`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Director` (
  `id_director` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `about` TEXT NULL,
  PRIMARY KEY (`id_director`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Star`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Star` (
  `id_start` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `about` TEXT NULL,
  PRIMARY KEY (`id_start`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Genre` (
  `id_genre` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_genre`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Movie_has_Director`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Movie_has_Director` (
  `id_movie` INT NOT NULL,
  `id_director` INT NOT NULL,
  PRIMARY KEY (`id_movie`, `id_director`),
  INDEX `fk_Movie_has_Director_Director1_idx` (`id_director` ASC) VISIBLE,
  INDEX `fk_Movie_has_Director_Movie1_idx` (`id_movie` ASC) VISIBLE,
  CONSTRAINT `fk_Movie_has_Director_Movie1`
    FOREIGN KEY (`id_movie`)
    REFERENCES `Movies`.`Movie` (`id_movie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Movie_has_Director_Director1`
    FOREIGN KEY (`id_director`)
    REFERENCES `Movies`.`Director` (`id_director`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Star_has_Movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Star_has_Movie` (
  `id_movie` INT NOT NULL,
  `id_start` INT NOT NULL,
  PRIMARY KEY (`id_movie`, `id_start`),
  INDEX `fk_Star_has_Movie_Movie1_idx` (`id_start` ASC) VISIBLE,
  INDEX `fk_Star_has_Movie_Star1_idx` (`id_movie` ASC) VISIBLE,
  CONSTRAINT `fk_Star_has_Movie_Star1`
    FOREIGN KEY (`id_movie`)
    REFERENCES `Movies`.`Star` (`id_start`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Star_has_Movie_Movie1`
    FOREIGN KEY (`id_start`)
    REFERENCES `Movies`.`Movie` (`id_movie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Movies`.`Genre_has_Movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Movies`.`Genre_has_Movie` (
  `id_movie` INT NOT NULL,
  `id_genre` INT NOT NULL,
  PRIMARY KEY (`id_movie`, `id_genre`),
  INDEX `fk_Genre_has_Movie_Movie1_idx` (`id_genre` ASC) VISIBLE,
  INDEX `fk_Genre_has_Movie_Genre1_idx` (`id_movie` ASC) VISIBLE,
  CONSTRAINT `fk_Genre_has_Movie_Genre1`
    FOREIGN KEY (`id_movie`)
    REFERENCES `Movies`.`Genre` (`id_genre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Genre_has_Movie_Movie1`
    FOREIGN KEY (`id_genre`)
    REFERENCES `Movies`.`Movie` (`id_movie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
