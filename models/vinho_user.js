const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vinho_user = new Schema({
    id_user : String,
    vinhos : [{
        id_vinho: String
    }]
});

module.exports = mongoose.model('Vinho_user', Vinho_user);