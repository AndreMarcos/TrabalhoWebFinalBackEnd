exports.checkUsers = function(email, senha, users){
    for(var i = 0; i < users.length; i++){
        if(users[i].email == email){
            if(users[i].senha == senha){
                return 1; //Senha incorrreta
            }else{
                return 3; //Senha incorreta
            }
        }
    }  
    return 2; //Usuário não encontrado
}


exports.onLogin = function (email, senha, users){
    if(checkUsers(email, senha, users) == 1){
        return  logado = {
            message: true
        }
    }
    if( checkUsers(email, senha, users) == 2){
        return logado = {
            message: "E-mail não encontrado"
        }
    }
    if( checkUsers(email, senha, users) == 3){
        return logado = {
            message: "Senha incorreta"
        }
    }
}
