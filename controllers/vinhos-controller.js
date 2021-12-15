const mongoose = require('mongoose');
const VinhosModel = mongoose.model('Vinhos');

exports.listVinhos = async (req, res) => {
    try{
        const data = await VinhosModel.find({});
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({message: 'Falha ao carregar requisição'})
    }
}


exports.createVinho = async (req, res, next) => {
    // print(req.body);
    const vinho  = new listVinhos(req.body)
    try{
        await vinho.save();
        res.status(200).send({message: 'Usuário cadastrado com sucesso!'});
    }catch(e){
            res.status(500).send({message: 'Falha ao cadastrar o usuário, o usuário já existe!'})

    }
}