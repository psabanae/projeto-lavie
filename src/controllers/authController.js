const Psicologos = require("../models/Psicologos")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = require("../config/secret")

const authController = {
    async login(req, res){
        try{
            const {email, senha} = req.body;
            const userPsicologo = await Psicologos.findOne({
                where: {
                    email
                }
            });
            if (!userPsicologo){
                return res.status(404).json("Usuario inexiste na base de dados");
            }
             // usuario existe na base de dados
                if (!bcryptjs.compareSync(senha, userPsicologo.senha)){
                    return res.status(401).json("Senha Invalida");
                }
            
            const token = jwt.sign({
                id_psicologos:userPsicologo.id,
                nome:userPsicologo.nome,
                email:userPsicologo.email
            }, secret.chave);
            return res.json(token);
        }
        catch(error){
            console.error(error);
            return res.status(500).json("Erro ao logar");
        }
    }
}

module.exports = authController;