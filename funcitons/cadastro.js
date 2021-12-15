function checkEmail(email, users) {
    for (var i = 0; i < users.length; i++) {
        if(users[i].email == email) {
            return false;
        }
    }
    return true;
}

// exports.onCadastro= function (email, users){
//     if(checkEmail(email, users)){
//         return true;
//     }else{
//         return false;
//     }
// }
