const Psicologos = require("../models/Psicologos");

/*const PsicologosController = {
  async listar(req, res) {
    const psicologos = await Psicologos.findAll();
    res.json(psicologos);
  }
};*/

console.log(Psicologos);
const PsicologosController = {
  async listar(req, res) {
    try {
      const psicologos = await Psicologos.findAll();
      return res.status(200).json(psicologos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

module.exports = PsicologosController;
