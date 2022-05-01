const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
  {
    id_pacientes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    nascimento: {
      type: DataTypes.DATEONLY
    }
  },
  {
    tableName: "pacientes",
    paranoid: true
  }
);

module.exports = Pacientes;
