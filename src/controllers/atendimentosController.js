const Atendimentos = require("../models/Atendimentos");
console.log(Atendimentos);

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll();
      res.status(200).json(listaDeAtendimentos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async listarAtendimentosPorId(req, res) {
    const idconsulta = req.params["id"];
    try {
      const listaDeAtendimentos = await Atendimentos.findByPk(idconsulta);
      if (listaDeAtendimentos !== null) {
        res.status(200).json(listaDeAtendimentos);
      } else {
        res.status(404).json("Id não informado");
      }
      console.log(res);
      if (listaDeAtendimentos) {
        res.status(200).json(listaDeAtendimentos);
      } else {
        res.status(404).json("Atendimento não encontrado");
      }
      console.log(res);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async agendarAtendimento(req, res) {
    const { id_pacientes, data_atendimentos, observacao, id_psicologos } = req.body;

    if (!id_pacientes || !data_atendimentos || !observacao || !id_psicologos ) {
      return res
        .status(400)
        .json(
          "Há um erro na requisição. Verifique se todos os dados foram preenchidos corretamente"
        );
    }

    const novoAtendimento = await Atendimentos.create({
      id_pacientes,
      data_atendimentos,
      observacao,
      id_psicologos
    });

    res.status(201).json(novoAtendimento);
  },
};

module.exports = atendimentosController;
