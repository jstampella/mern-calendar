const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./database/config');

const app = express();

//Base de datos
dbConnection();

//cors
app.use(cors());

// Directorio publico
app.use(express.static(__dirname + '/public'));

//Lectura y parseo de body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public');
});

const port = process.env.PORT || 3000;

// Escuchar peticiones
app.listen(port, () => {
	console.log(`servidor corriendo en puerto ${port}`);
});
