const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.model('User', User);