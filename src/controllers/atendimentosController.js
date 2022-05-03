const Atendimentos = require("../models/Atendimentos");

const atendimentosController = {

  async listarAtendimentos(req, res) {
  
    try {
      const listaDeAtendimentos = await Atendimentos.findAll();
      return res.status(200).json(listaDeAtendimentos);
  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async listarAtendimentosPorId(req, res) {
  
    try {
      const { id } = req.params;
      const listaDeAtendimentos = await Atendimentos.findOne({
        where: {
          id_atendimentos: id,
        },
      });

      if (!listaDeAtendimentos) {
        return res.status(404).json("Atendimento não encontrado");
      }
      
      return res.status(200).json(listaDeAtendimentos);

    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async agendarAtendimento(req, res) {
    const { id_pacientes, data_atendimentos, observacao, id_psicologos } =
      req.body;

    // if (!id_pacientes || !data_atendimentos || !observacao || !id_psicologos) {
    //   return res
    //     .status(400)
    //     .json(
    //       "Há um erro na requisição. Verifique se todos os dados foram preenchidos corretamente"
    //     );
    // }

    const novoAtendimento = await Atendimentos.create({
      id_pacientes,
      data_atendimentos,
      observacao,
      id_psicologos,
    });

    return res.status(201).json(novoAtendimento);
  },
};

module.exports = atendimentosController;
