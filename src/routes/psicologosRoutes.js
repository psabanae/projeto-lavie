const express = require("express");
const routes = express.Router();

const controllerPsicologos = require("../controllers/psicologosController");
const authController = require("../controllers/authController");


const login = require("../validator/loginValidacao");
const psicologosValidator = require("../validator/psicologosValidacao");

routes.get("/psicologos", controllerPsicologos.listarPsicologos);
routes.get("/psicologos/:id", controllerPsicologos.listarPsicologosId);
routes.post("/psicologos/", psicologosValidator, controllerPsicologos.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosValidator, controllerPsicologos.atualizarPsicologo);
routes.delete("/psicologos/:id", controllerPsicologos.deletarPsicologo);

routes.post("/login", login, authController.login);

module.exports = routes;