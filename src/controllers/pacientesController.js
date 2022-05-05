const { Pacientes } = require("../models");

const PacientesController = {

  async listarTodosPacientes(req, res) {
    try {
      const { page = 1 } = req.query;
            const limit = 5;
            const offset = limit * (parseInt(page) - 1);
            let filter = {
                limit,
                offset,
            };
      const pacientes = await Pacientes.findAll(filter);
      return res.status(200).json(pacientes);
    } catch (error) {
      return res.status(500).json("Erro ao listar os pacientes");
    }
  },
  async listarPaciente(req, res) {
    const { id } = req.params;
    try {
        const validaPaciente = await Pacientes.count({
          where: {id_pacientes: id}
        });
        if(!validaPaciente) return res.status(404).json("Id não encontrada.");
      const paciente = await Pacientes.findOne({
        where: { id_pacientes: id }
      });
      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(500).json("Erro ao listar paciente");
    }
  },
  async cadastrarPaciente(req, res) {
    const { nome, email, nascimento } = req.body;
  try{
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      nascimento
    });
    return res.status(201).json(novoPaciente);
  } catch(error) {
    return res.status(500).json("Erro ao cadastrar paciente");
  }
},
  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, nascimento } = req.body;
    try {
      const validaPaciente = await Pacientes.count({
        where: {id_pacientes: id}
      });
      if(!validaPaciente) return res.status(404).json("Id não encontrada.");
      const atualizaPaciente = await Pacientes.update(
        { nome, 
          email, 
          nascimento
        },
        { where: { id_pacientes: id } }
      );
      return res.status(200).json("Paciente Atualizado");
    } catch (error) {
      return res.status(500).json("Erro ao atualizar paciente");
    }
  },
  async deletarPaciente(req, res) {
    const { id } = req.params;
    try {
      const validaPaciente = await Pacientes.count({
        where: {id_pacientes: id}
      });
      if(!validaPaciente) return res.status(404).json("Id não encontrada.");
      const deletaPaciente = await Pacientes.destroy({
        where: {
          id_pacientes: id
        }
      });  
      return res.status(204).json("Paciente apagado");
    } catch (error) {
      return res.status(500).json("Ocorreu um erro");
    }
  
  },
  async contarPacientes(req, res) {
    try {
      const contadorPacientes = await Pacientes.count();
      return res.status(200).json(`Temos ${contadorPacientes} pacientes cadastrados`);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro");
    }
  }
};

module.exports = PacientesController;