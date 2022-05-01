const Atendimentos = require("../models/Atendimentos");
console.log(Atendimentos);


const atendimentosController = {
    async listarAtendimentos(req, res) {
        try {
            const listaDeAtendimentos = await Atendimentos.findAll();
            res.status(200).json(listaDeAtendimentos);
        }
        catch (error) {
            res.status(500).json(error.message);
        };
    }
}

module.exports = atendimentosController;