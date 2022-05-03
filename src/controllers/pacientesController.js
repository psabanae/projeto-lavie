const Pacientes = require("../models/Pacientes");

const PacientesController = {

  //Lista todos pacientes
  async listarTodosPacientes(req, res) {
    
    try {
      const pacientes = await Pacientes.findAll();
      return res.status(200).json(pacientes);
    
    } catch (error) {
      return res.status(500).json(error.message);
    }

  },

  //Lista paciente por Id
  async listarPaciente(req, res) {
    const { id } = req.params;

    try {
      const paciente = await Pacientes.findOne({
        where: { id_pacientes: id }
      });
    
      if (!paciente) {
        return res.status(404).json("Id não encontrado");
      }
      
      return res.status(200).json(paciente);
    
    } catch (error) {
      return res.status(500).json(error);
    }

  },

  //Cadastra paciente
  async cadastrarPaciente(req, res) {
    const { nome, email, nascimento } = req.body;
    // if (!nome || !email || !nascimento) {
    //   return res
    //     .status(400)
    //     .json({ error: "Você precisa passar os atributos corretamente" });
    // }
  try{
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      nascimento
    });

    return res.status(201).json(novoPaciente);
  
  } catch(error) {
    return res.status(500).json(error);
  }
  
},
  //Atualiza paciente
  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, nascimento } = req.body;

    // if (!novo_nome || !novo_email || !nova_dataNascimento) {
    //   return res
    //     .status(400)
    //     .json({ error: "Você precisa passar os atributos corretamente" });
    // }
    
    try {
      const atualizaPaciente = await Pacientes.update(
        { nome, 
          email, 
          nascimento
        },
        { where: { id_pacientes: id } }
      );
      
      if (atualizaPaciente == 0) {
        return res.status(400).json("Id invalido");
      }

      return res.status(200).json("Paciente Atualizado");
    
    } catch (error) {
      return res.status(500).json(error);
    }
  
  },

  //Deleta paciente
  async deletarPaciente(req, res) {
    
    try {
      const { id } = req.params;
      const deletaPaciente = await Pacientes.destroy({
        where: {
          id_pacientes: id
        }
      });
      
      if (deletaPaciente == 0){
        return res.status(404).json("Id não encontrado");
      } 
      
      return res.status(204).json("Paciente apagado");
    
    } catch (error) {
      return res.status(500).json("Ocorreu um erro");
    }
  
  }

};

module.exports = PacientesController;