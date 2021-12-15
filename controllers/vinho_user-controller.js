const mongoose = require('mongoose');
const Vinho_user = mongoose.model('Vinho_user');

exports.listVinhoUser = async (req, res) => {
    try{
        const data = await Vinho_user.find({});
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({message: 'Falha ao carregar requisição'})
    }
}
