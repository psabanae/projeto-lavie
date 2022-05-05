const { Psicologos } = require("../models");
const bcryptjs = require("bcryptjs");


const controllerPsicologos = {
    async listarPsicologos(req, res) {
        try {
            const { page = 1 } = req.query;
            const limit = 5;
            const offset = limit * (parseInt(page) - 1);
            let filter = {
                limit,
                offset,
            };
            const listaDePsicologos = await Psicologos.findAll(filter);
            return res.status(200).json(listaDePsicologos);
        }
        catch (error) {
            return res.status(500).json("Erro ao listar os psicologos");
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
            return res.status(500).json("Erro ao listar o psicologo");
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
            return res.status(204);
        } catch (error) {
            return res.status(500).json("Erro ao tentar excluir")
        };
    },
    async cadastrarPsicologo(req, res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const existingUser =
                await Psicologos.count({ where: { email } })
            if (existingUser) {
                return res.status(400).json('Email já está cadastrado')
            }
            const novaSenha = bcryptjs.hashSync(senha, 10)
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha: novaSenha,
                apresentacao
            });
            res.status(201).json(novoPsicologo);
        } catch (error) {
            return res.status(500).json("Erro ao tentar cadastrar")
        }
    },
    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        try {
            const { nome, email, senha, apresentacao } = req.body
            const atualizado = await Psicologos.update(
                {
                    nome,
                    email,
                    senha,
                    apresentacao
                }, {
                where: {
                    id_psicologos: id
                },
            }
            )
            if (atualizado == 0) return res.status(400).json("Id invalido");
            return res.status(200).json("Psicologo Atualizado");
        } catch (error) {
            return res.status(500).json("Erro ao tentar atualizar")
        }
    },
    async contarPsicologos(req, res) {
        try {
            const contadorPsicologos = await Psicologos.count();
            return res.status(200).json(contadorPsicologos);
        } catch (error) {
            return res.status(500).json("Ocorreu um erro");
        }
    }
};

module.exports = controllerPsicologos;