//Express para Rotas e Servidor
const express = require('express');

//APP
const app = express();

//Conexão com MongoDB
const mongoose = require('mongoose');
const uri = "mongodb+srv://root:wXN9uEFCPpEoh4tW@cluster0.wa9qi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = mongoose.connection;
mongoose.connect(uri, {
    useNewUrlParser: true
});

db.on('connected', () => {
    console.log('Conectado com o MongoDB');
});

db.on('error', err => {
    console.log(`Não conectado com o MongoDB -> \n${err}`);
});

db.on('disconnected', () => {
    console.log('Disconectado do MongoDB');
});

// Carregar Modulos
const User = require('../models/user');
const Vinhos = require('../models/vinho');
const Vinho_user = require("../models/vinho_user");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
})

app.use(express.json());
//Carregar Rotas
//User
const usersRoutes = require('../routes/users-routes');
app.use('/user', usersRoutes);
const vinhosRoutes = require('../routes/vinhos-routes');
app.use('/vinhos', vinhosRoutes)
const vinho_userRoutes = require("../routes/vinho_user-routes");
app.use('/vinhouser', vinho_userRoutes)
// app.post('/teste', (req, res) => {
//     const { id, title } = req.body;
//     const project = {
//         id,
//         title,
//     };
//     return res.json(project);
// });

module.exports = app;