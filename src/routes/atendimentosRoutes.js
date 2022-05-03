const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const auth = require("../middleware/auth")
const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosPorId);
routes.post("/atendimentos",auth, atendimentosController.agendarAtendimento);

module.exports = routes;
