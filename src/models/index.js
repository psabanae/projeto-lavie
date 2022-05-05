const Atendimentos = require('./Atendimentos');
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');

Atendimentos.belongsTo(Psicologos, {
    foreignKey:  'id_psicologos'
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey:  'id_pacientes'
});

module.exports = {
    Atendimentos,
    Psicologos,
    Pacientes
}