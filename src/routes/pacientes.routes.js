const express = require("express");
const PacientesController = require("../controllers/pacientesController");
const pacientesUpdateValidator = require("../validator/pacientes/update");
// const PsicologosController = require("../controllers/psicologosController");
const routes = express.Router();

routes.get("/pacientes", PacientesController.listar);
routes.get("/pacientes/:id", PacientesController.recuperar);
routes.post("/pacientes", PacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", pacientesUpdateValidator, PacientesController.atualizar);
// routes.delete("/pacientes/:id", PacientesController.deletar);

// routes.get("/psicologos", PsicologosController.listar);

module.exports = routes;
