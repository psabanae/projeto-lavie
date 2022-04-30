const Psicologos = require("../models/Psicologos")

console.log(Psicologos)

const controllerPsicologos = {
    async listarPsicologos(req, res) {
        try {
            const listaDePsicologos = await Psicologos.findAll();
            return res.status(200).json(listaDePsicologos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        };
    },
}

module.exports = controllerPsicologos;