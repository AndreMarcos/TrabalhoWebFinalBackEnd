const LoginFunction = require('../funcitons/login');
const CadastroFunction = require('../funcitons/cadastro');
const mongoose = require('mongoose');
const UserModel = mongoose.model('User');

exports.listUser = async (req, res) => {
    try{
        const data = await UserModel.find({});
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({message: 'Falha ao carregar requisição'})
    }
}


exports.createUser = async (req, res, next) => {
    // print(req.body);
    const user  = new UserModel(req.body)
    try{
        await user.save();
        //res.send(user);
        // await User.save();
        res.status(200).send({message: 'Usuário cadastrado com sucesso!'});
    }catch(e){
            res.status(500).send({message: 'Falha ao cadastrar o usuário, o usuário já existe!'})

    }
}