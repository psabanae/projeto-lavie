const express = require("express");
const controllerPsicologos = require("../controllers/controllerPsicologos");
const login = require("../validator/loginValidacao")
const cadastro = require("../validator/cadastroValidacao")
const autentica = require("../middleware/trataErro")
const authController = require("../controllers/authController");
const routes = express.Router();

routes.get("/psicologos", controllerPsicologos.listarPsicologos);
routes.get("/psicologos/:id", controllerPsicologos.listarPsicologosId);
routes.delete("/psicologos/:id", controllerPsicologos.deletarPsicologo)
routes.post("/psicologos/", cadastro, controllerPsicologos.cadastrarPsicologo)
routes.put("/psicologos/:id", controllerPsicologos.atualizarPsicologo)
routes.post("/login", login, autentica, authController.login)

module.exports = routes;