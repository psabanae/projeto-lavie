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
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.TINYINT
    }
  },
  {
    tableName: "pacientes",
    timestamps: false
  }
);

module.exports = Pacientes;
