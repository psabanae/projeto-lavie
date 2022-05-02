const express = require("express");
const controllerPsicologos = require("../controllers/controllerPsicologos");
const routes = express.Router();

routes.get("/psicologos", controllerPsicologos.listarPsicologos);
routes.get("/psicologos/:id", controllerPsicologos.listarPsicologosId);
routes.delete("/psicologos/:id", controllerPsicologos.deletarPsicologo)
routes.post("/psicologos/", controllerPsicologos.cadastrarPsicologo)
routes.put("/psicologos/:id", controllerPsicologos.atualizarPsicologo)

module.exports = routes;