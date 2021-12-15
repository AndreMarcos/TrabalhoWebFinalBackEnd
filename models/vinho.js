const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vinhos = new Schema({
    img : String,
    nome : String,
    pais : String,
    tipo_vinho : String,
    tipo_uva : String,
    harmonizacao : String,
    vinicola : String
});

module.exports = mongoose.model('Vinhos', vinhos);