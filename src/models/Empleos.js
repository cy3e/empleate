const mongoose = require('mongoose')
const mongodb = require('mongodb')

const {Schema} = mongoose;

const EmpleosSchema = new Schema({
    titulo: {type: String, require: true}, 
    lugar: {type: String, require: true},
    descripcion: {type: String, require: true},
    cargo:{type: String, require: true}, 
    empresa:{type: String, require: true},
    Fecha:{type: Date, default: date.now},
});

module.export = mongoose.model('Empleo',EmpleosSchema);