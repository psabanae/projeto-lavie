const {expressjwt:expressJWT} = require("express-jwt");
const secret = require("../config/secret")

module.exports = expressJWT({
    secret:secret.chave,
    algorithms:["HS256"],
});