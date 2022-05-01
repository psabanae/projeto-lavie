const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listarAtendimentos);

module.exports = routes;
