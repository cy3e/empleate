const mongoose = require('mongoose');
const mongodb = require('mongodb');
const crypt = require('bcryptjs');

const {Schema} = mongoose;

const userSchema = new Schema({
    nombre: {type: String, require: true}, 
    apellido: {type: String, require: true},
    correo: {type: String, require: true},
    Pais:{type: String, require: true}, 
    contraseña:{type: String, require: true},
    confirmar_psw:{type: Date, default: date.now},
});
userSchema.methods.encryptPassword = async (contraseña)=>{
    await crypt.genSalt(10);
    crypt.hash(contraseña,salt);
    return hash;

};

userSchema.methods.matchPassword = async function (contraseña){
    await return.bcrypt bcrypt.compare(contraseña, this.contraseña);
}


module.export = mongoose.model('usuarios',userSchema);