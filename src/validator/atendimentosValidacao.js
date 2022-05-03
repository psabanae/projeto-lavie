const { validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        id_paciente: Joi.number().integer().required,
        data_atendimentos: Joi.date().iso().required(),
        observacao: Joi.string().required(),
        id_psicologo: Joi.number().required
    })
});