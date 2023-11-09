-- MySQL Script generated by MySQL Workbench
-- Thu Nov  2 11:28:58 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Direccion` (
  `idDireccion` INT NOT NULL,
  `distrito` VARCHAR(45) NULL,
  `codigoPostal` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `localizacion` VARCHAR(45) NULL,
  `last_update` VARCHAR(45) NULL,
  `idCiudad` INT NULL,
  PRIMARY KEY (`idDireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ciudad` (
  `idCiudad` INT NOT NULL,
  `nombreCiudad` VARCHAR(45) NULL,
  `idPais` VARCHAR(45) NULL,
  `last_update` VARCHAR(45) NULL,
  `Direccion_idDireccion` INT NOT NULL,
  PRIMARY KEY (`idCiudad`),
  INDEX `fk_Ciudad_Direccion_idx` (`Direccion_idDireccion` ASC) VISIBLE,
  CONSTRAINT `fk_Ciudad_Direccion`
    FOREIGN KEY (`Direccion_idDireccion`)
    REFERENCES `mydb`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pais` (
  `idPais` INT NOT NULL,
  `pais` VARCHAR(45) NULL,
  `last_update` VARCHAR(45) NULL,
  `Ciudad_idCiudad` INT NOT NULL,
  PRIMARY KEY (`idPais`),
  INDEX `fk_Pais_Ciudad1_idx` (`Ciudad_idCiudad` ASC) VISIBLE,
  CONSTRAINT `fk_Pais_Ciudad1`
    FOREIGN KEY (`Ciudad_idCiudad`)
    REFERENCES `mydb`.`Ciudad` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`Direccion`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Direccion` (`idDireccion`, `distrito`, `codigoPostal`, `telefono`, `localizacion`, `last_update`, `idCiudad`) VALUES (DEFAULT, 'a', 'a', '111111111', 'a', '20/10/2010', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Ciudad`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Ciudad` (`idCiudad`, `nombreCiudad`, `idPais`, `last_update`, `Direccion_idDireccion`) VALUES (1, 'a', '1', '10/10/2010', a);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Pais`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Pais` (`idPais`, `pais`, `last_update`, `Ciudad_idCiudad`) VALUES (, 'mexico', '20/02/02 10:10', 1);

COMMIT;

