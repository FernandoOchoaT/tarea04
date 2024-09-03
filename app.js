const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Configuración de la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Configuración de las rutas
app.get('/clientes', (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(9000, () => {
    console.log('Servidor corriendo en el puerto 9000');
});
