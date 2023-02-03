const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

console.log(process.env.PORT);
console.log("/////////////////");
console.log(process.env.DB_CNN);

//Base de datos
//dbConnection();

//cors
app.use(cors());

// Directorio publico
app.use(express.static("public"));

//Lectura y parseo de body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
// TODO: CRUD> Eventos

const port = process.env.PORT || 3000;

// Escuchar peticiones
app.listen(port, () => {
  console.log(`servidor corriendo en puerto ${port}`);
});
