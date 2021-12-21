const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    nombreusuario:{ 
        type:String,
        require:true
    },
    contraseñausuario:{
        type:String,
        require:true
    },
    correousuario:{
        type:String,
        require:true
    },
    tipousuario:{
        type:String,
        require:true
    }
})

const UserModel = mongoose.model('usuarios', UserSchema)

module.exports = UserModel