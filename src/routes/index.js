const express = require("express");
const controllerPsicologos = require("../controllers/controllerPsicologos");
const routes = express.Router();

routes.get("/psicologos", controllerPsicologos.listarPsicologos);

module.exports = routes;