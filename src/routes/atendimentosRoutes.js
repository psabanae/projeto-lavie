const express = require("express");

const routes = express.Router();

const atendimentosController = require("../controllers/atendimentosController");
const atendimentosValidator = require("../validator/atendimentosValidacao");
const auth = require("../middleware/auth");


routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosPorId);
routes.post("/atendimentos", auth, atendimentosValidator, atendimentosController.agendarAtendimento);

module.exports = routes;
