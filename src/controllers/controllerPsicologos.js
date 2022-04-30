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
    async listarPsicologosId(req, res) {
        try {
            const {id} = req.params;
            const listaDePsicologos = await Psicologos.findOne({
                where: {
                    id_psicologos: id
                }
              });
            if(listaDePsicologos !== null) res.status(200).json(listaDePsicologos)
            else res.status(404).json("id não enviado");
            console.log(listaDePsicologos)
        } 
        catch (error) {
            return res.status(500).json("error.message");
        };
    },
}


module.exports = controllerPsicologos;