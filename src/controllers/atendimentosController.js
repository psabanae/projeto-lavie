const Atendimentos = require("../models/Atendimentos");
const Psicologos = require("../models/Psicologos");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const { page = 1 } = req.query;
            const limit = 5;
            const offset = limit * (parseInt(page) - 1);
            let filter = {
                limit,
                offset,
            };
      const listaDeAtendimentos = await Atendimentos.findAll(filter);
      return res.status(200).json(listaDeAtendimentos);
    } catch (error) {
      return res.status(500).json("Erro ao listar os atendimentos");
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
      return res.status(500).json("Erro ao listar o atendimento");
    }
  },
  async agendarAtendimento(req, res) {
    try {
      const { id_pacientes, data_atendimentos, observacao } =
      req.body;
    const IdNoToken = req.auth.id_psicologos;
    const novoAtendimento = await Atendimentos.create({
      id_pacientes,
      data_atendimentos,
      observacao,
      id_psicologos: IdNoToken
    }); 
    return res.status(201).json(novoAtendimento);
    } catch (error) {
      return res.status(500).json("Erro ao agendar o atendimento");
    }
    
  },
  async contarAtendimentos(req, res) {
    try {
      const contadorAtendimentos = await Atendimentos.count();
      return res.status(200).json(contadorAtendimentos);
    } catch (error) {
      return res.status(500).json("Erro ao tentar cadastrar");
    }
  },
  async mediaAtendimentos(req, res) {
    try {
      const contadorAtendimentos = await Atendimentos.count();
      const contadorPsicologos = await Psicologos.count();
      const mediaAtPorPsi = ( contadorAtendimentos / contadorPsicologos);
      return res.status(200).json(mediaAtPorPsi);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro");
    }
  }
};

module.exports = atendimentosController;
