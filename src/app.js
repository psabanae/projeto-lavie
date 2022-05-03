const express = require("express");
const cors = require("cors");
const db = require("./database");

const psicologosRoutes = require("./routes/psicologosRoutes");
const pacientesRoutes = require("./routes/pacientesRoutes");
const atendimentosRoutes = require("./routes/atendimentosRoutes");

const trataErro = require('./middleware/trataErro');

const app = express();

db.hasConnection();
app.use(express.json());
app.use(cors());

app.use(psicologosRoutes);
app.use(pacientesRoutes);
app.use(atendimentosRoutes);
app.use(trataErro);


app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
