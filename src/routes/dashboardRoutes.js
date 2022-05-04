const express = require("express");

const routes = express.Router();

const AtendimentosController = require("../controllers/atendimentosController");
const PacientesController = require("../controllers/pacientesController");
const PsicologosController = require("../controllers/psicologosController");

routes.get("/dashboard/numero-pacientes", PacientesController.contarPacientes);
routes.get("/dashboard/numero-psicologos", PsicologosController.contarPsicologos);
routes.get("/dashboard/numero-atendimentos", AtendimentosController.contarAtendimentos);
routes.get("/dashboard/media-atendimentos", AtendimentosController.mediaAtendimentos);

module.exports = routes;