const express = require("express");
const cors = require("cors");
const routes = require("./routes/pacientes.routes");
const app = express();
const db = require("./database");
const trataErroValidacao = require("./middleware/trataErroValidacao");

db.hasConnection();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(trataErroValidacao);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
