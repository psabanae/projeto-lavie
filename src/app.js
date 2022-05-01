const express = require("express");
const cors = require("cors");
const psicologosRoutes = require("./routes/psicologosRoutes");
const pacientesRoutes = require("./routes/pacientes.routes");
const atendimentosRoutes = require("./routes/atendimentosRoutes");
const app = express();
const db = require("./database");
const trataErroValidacao = require("./middleware/handleError");

db.hasConnection();
app.use(express.json());
app.use(cors());

app.use(psicologosRoutes);
app.use(pacientesRoutes);
app.use(atendimentosRoutes);
app.use(trataErroValidacao);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
