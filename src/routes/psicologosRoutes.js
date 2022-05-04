const express = require("express");
const routes = express.Router();

const ControllerPsicologos = require("../controllers/psicologosController");
const AuthController = require("../controllers/authController");


const Login = require("../validator/loginValidacao");
const PsicologosValidator = require("../validator/psicologosValidacao");

routes.get("/psicologos", ControllerPsicologos.listarPsicologos);
routes.get("/psicologos/:id", ControllerPsicologos.listarPsicologosId);
routes.post("/psicologos/", PsicologosValidator, ControllerPsicologos.cadastrarPsicologo);
routes.put("/psicologos/:id", PsicologosValidator, ControllerPsicologos.atualizarPsicologo);
routes.delete("/psicologos/:id", ControllerPsicologos.deletarPsicologo);

routes.post("/login", Login, AuthController.login);

module.exports = routes;