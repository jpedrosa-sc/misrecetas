let User = {}

User.auth = function(email, password){
    if(email == 'jacobo@somoscoders.org' && password == 'somoscoders'){
        return true;
    }else{
        return false;
    }
}


User.list = function(){
    //Buscar usuarios en db (atributos queremos de cada usuario)
    return []; //Array con todos los usuarios
}

User.friends = function(id_u){
    return []; //Array con todos los usuarios
}

module.exports = User