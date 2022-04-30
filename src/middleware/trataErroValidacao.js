const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");

function trataErroValidacao(error, req, res, next){
    if (error instanceof ValidationError){
        return res.status(error.statusCode).json("Dados Inválidos. Verique se todos estão corretos.");
    }
    else if (error instanceof UnauthorizedError){
        return res.status(403).json("Acesso Negado!");
    }
    console.error(error);
    return res.status(500).json(error);
}

module.exports = trataErroValidacao;
