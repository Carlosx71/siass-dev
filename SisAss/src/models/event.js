'use strict';
const mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const teste = mongoose.Schema({})
const schema = new Schema({
    evento: {
        type: String,
        required: true
    },
    dataEvento: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numeroEnd: {
        type: Number,
        required: true
    },
    complemento: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});
schema.plugin(mongoosePaginate);
//const Model = mongoose.model('Model',  schema)
//Exportando o schema de event
module.exports = mongoose.model('Event', schema);