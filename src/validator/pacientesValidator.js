const { validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        novo_nome: Joi.string().required(),
        novo_email: Joi.string().email().required(),
        nova_dataNascimento: Joi.date().required()
    })
});