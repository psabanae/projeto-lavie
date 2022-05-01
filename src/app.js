const express = require("express");
const cors = require("cors");
const pacientesRoutes = require("./routes/pacientes.routes");
const app = express();
const db = require("./database");
const trataErroValidacao = require("./middleware/handleError");

db.hasConnection();
app.use(express.json());
app.use(cors());

app.use(pacientesRoutes);
app.use(trataErroValidacao);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
