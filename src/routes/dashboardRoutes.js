const express = require("express");

const routes = express.Router();

const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");

routes.get("/dashboard/numero-pacientes", pacientesController.contarPacientes);
routes.get("/dashboard/numero-psicologos", psicologosController.contarPsicologos);
routes.get("/dashboard/numero-atendimentos", atendimentosController.contarAtendimentos);
routes.get("/dashboard/media-atendimentos", atendimentosController.mediaAtendimentos);

module.exports = routes;