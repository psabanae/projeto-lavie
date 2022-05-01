SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Lavie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Lavie` DEFAULT CHARACTER SET utf8 ;
USE `Lavie` ;

-- -----------------------------------------------------
-- Table `Lavie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Lavie`.`psicologos` (
  `id_psicologos` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `senha` VARCHAR(100) NULL,
  `apresentacao` VARCHAR(300) NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`id_psicologos`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Lavie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Lavie`.`pacientes` (
  `id_pacientes` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `nascimento` DATE NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`id_pacientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lavie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Lavie`.`atendimentos` (
  `id_atendimentos` INT NOT NULL AUTO_INCREMENT,
  `id_psicologos` INT NOT NULL,
  `id_pacientes` INT NOT NULL,
  `data_atendimentos` DATETIME NULL,
  `observacao` VARCHAR(300) NULL,
  PRIMARY KEY (`id_atendimentos`),
  CONSTRAINT `fk_psicologos_has_pacientes_psicologos`
    FOREIGN KEY (`id_psicologos`)
    REFERENCES `Lavie`.`psicologos` (`id_psicologos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_psicologos_has_pacientes_pacientes1`
    FOREIGN KEY (`id_pacientes`)
    REFERENCES `Lavie`.`pacientes` (`id_pacientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;nascimentonascimento