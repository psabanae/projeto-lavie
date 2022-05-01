const Pacientes = require("../models/Pacientes");

const PacientesController = {
  //Lista todos pacientes
  async listar(req, res) {
    try {
      const pacientes = await Pacientes.findAll();
      return res.status(200).json(pacientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  //Lista paciente por Id
  async recuperar(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json("Id não enviada.");

    try {
      const paciente = await Pacientes.findOne({
        where: { id_pacientes: id }
      });
      if (paciente.length === 0) {
        return res.status(404).json("Id do paciente não encontrada.");
      }

      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(500).json("Erro Inesperado");
    }
  },

  //Cadastra paciente
  async cadastrarPacientes(req, res) {
    const { nome, email, nascimento, status } = req.body;
    if (!nome || !email || !nascimento || !status) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      nascimento,
      status
    });
    res.status(201).json(novoPaciente);
  },

  //Atualiza paciente
  async atualizar(req, res) {
    const { id } = req.params;
    const { novo_nome, novo_email, nova_dataNascimento } = req.body;

    if (!id) return res.status(400).json("Id não enviada.");

    try {
      const atualizarPaciente = await Pacientes.update(
        { nome: novo_nome, email: novo_email, nascimento: nova_dataNascimento },
        { where: { id_pacientes: id } }
      );
      return res.status(200).json("Paciente Atualizado");
    } catch (error) {
      return res.status(400).json("Erro Inesperado");
    }
  }
};

module.exports = PacientesController;
