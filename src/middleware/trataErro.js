const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next)=>{
    if (error instanceof ValidationError){
        return res.status(error.statusCode).json('Dados Inválidos. Verique se todos estão corretos.');
    }
    if (error.name === 'UnauthorizedError'){
        return res.status(error.status).json('Usuário não autorizado para realizar esta operação.');
    }
    
    return res.status(500).json(error);
};
