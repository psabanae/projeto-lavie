const { ValidationError } = require("express-validation");

function trataValidacao(error, req, res, next){
    if (error instanceof ValidationError){
        return res.status(error.statusCode).json("Dados Inválidos. Verique se todos estão corretos.");
    }
        return res.status(500).json(error);
}

module.exports = trataValidacao;
