const express = require("express");
const routes = express.Router();

const PacientesController = require("../controllers/pacientesController");
const PacientesValidator = require("../validator/pacientesValidacao");


routes.get("/pacientes", PacientesController.listarTodosPacientes);
routes.get("/pacientes/:id", PacientesController.listarPaciente);
routes.post("/pacientes", PacientesValidator, PacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", PacientesValidator, PacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", PacientesController.deletarPaciente);


module.exports = routes;
