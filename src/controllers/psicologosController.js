const Psicologos = require("../models/Psicologos")
const bcryptjs = require("bcryptjs");


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
            const { id } = req.params;
            const listaDePsicologos = await Psicologos.findOne({
                where: {
                    id_psicologos: id
                }
            });
            if (!listaDePsicologos) return res.status(404).json("Id não encontrado");

           return res.status(200).json(listaDePsicologos);
        }

        catch (error) {
            return res.status(500).json("error.message");
        };

    },

    async deletarPsicologo(req, res) {

        try {
            const { id } = req.params;
            const psicologos = await Psicologos.destroy({
                where: {
                    id_psicologos: id
                }
            });
            if (!psicologos) return res.status(404).json("Id não encontrado");
            
            return res.status(204).json("Psicologo apagado");
 

        } catch (error) {
            return res.status(500).json("Ocorreu um erro")
        };

    },

    async cadastrarPsicologo(req, res) {

        try {
            const { nome, email, senha, apresentacao } = req.body;

            const novaSenha = bcryptjs.hashSync(senha,10)
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha:novaSenha,
                apresentacao
            });
            res.status(201).json(novoPsicologo);

        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError'){
                return res.status(403).json('E-mail já cadastrado no sistema.');
            }
            return res.status(500).json(error)

        }

    },

    async atualizarPsicologo(req, res) {

        const { id } = req.params;
        try {
            const { nome, email, senha, apresentacao } = req.body   
        //     if (!nome || !email || !senha || !apresentacao) {
        //     return res
        //         .status(400)
        //         .json({ error: "Você precisa passar os atributos corretamente" });
        // }    
        
        const atualizado = await Psicologos.update(
            {
                nome,
                email,
                senha,
                apresentacao
            }, {
                where:{
                    id_psicologos: id
                },
            }
        )
        if(atualizado == 0) return res.status(400).json("Id invalido");
        
        return res.status(200).json("Psicologo Atualizado");
       
        } catch (error) {
            return res.status(500).json("error.message")
        }
            
    }

};


module.exports = controllerPsicologos;