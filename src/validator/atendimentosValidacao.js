const { validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        id_pacientes: Joi.number().integer().required(),
        data_atendimentos: Joi.date().iso().required(),
        observacao: Joi.string().required(),
        //id_psicologos: Joi.number().required()
    })
});