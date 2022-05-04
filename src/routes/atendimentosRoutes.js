const express = require("express");

const routes = express.Router();

const AtendimentosController = require("../controllers/atendimentosController");
const AtendimentosValidator = require("../validator/atendimentosValidacao");
const Auth = require("../middleware/auth");


routes.get("/atendimentos", AtendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", AtendimentosController.listarAtendimentosPorId);
routes.post("/atendimentos", Auth, AtendimentosValidator, AtendimentosController.agendarAtendimento);

module.exports = routes;
