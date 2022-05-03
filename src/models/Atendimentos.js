const db = require ("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
    "Atendimentos",
    {
     id_atendimentos:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         field: "id_atendimentos"
     },
     id_psicologos:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "id_psicologos"
     },
     id_pacientes:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "id_pacientes"
     },
     data_atendimentos:{
         type: DataTypes.DATE,
         field: "data_atendimentos"
     },
     observacao:{
        type: DataTypes.STRING,
        length: 300,
        field: "observacao"
     }
    },{
        tableName: "atendimentos",
        paranoid: true,
    }
);

module.exports = Atendimentos;