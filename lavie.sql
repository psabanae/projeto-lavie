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
-- Table `mydb`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`psicologos` (
  `id_psicologos` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `apresentacao` VARCHAR(300) NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`id_psicologos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pacientes` (
  `id_pacientes` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `idade` DATE NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`id_pacientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`atendimentos` (
  `id_atendimentos` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATETIME NULL,
  `observacao` VARCHAR(300) NULL,
  PRIMARY KEY (`id_atendimentos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`psicologos_atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`psicologos_atendimentos` (
  `id_psicologos` INT NOT NULL,
  `id_atendimentos` INT NOT NULL,
  PRIMARY KEY (`id_psicologos`, `id_atendimentos`),
  CONSTRAINT `fk_psicologos_has_atendimentos_psicologos`
    FOREIGN KEY (`id_psicologos`)
    REFERENCES `mydb`.`psicologos` (`id_psicologos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_psicologos_has_atendimentos_atendimentos1`
    FOREIGN KEY (`id_atendimentos`)
    REFERENCES `mydb`.`atendimentos` (`id_atendimentos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`atendimentos_pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`atendimentos_pacientes` (
  `id_atendimentos` INT NOT NULL,
  `id_pacientes` INT NOT NULL,
  PRIMARY KEY (`id_atendimentos`, `id_pacientes`),
  CONSTRAINT `fk_atendimentos_has_pacientes_atendimentos1`
    FOREIGN KEY (`id_atendimentos`)
    REFERENCES `mydb`.`atendimentos` (`id_atendimentos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_has_pacientes_pacientes1`
    FOREIGN KEY (`id_pacientes`)
    REFERENCES `mydb`.`pacientes` (`id_pacientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
