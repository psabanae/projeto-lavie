const express = require("express");
const controllerPsicologos = require("../controllers/controllerPsicologos");
const routes = express.Router();

routes.get("/psicologos", controllerPsicologos.listarPsicologos);
routes.get("/psicologos/:id", controllerPsicologos.listarPsicologosId);
module.exports = routes;