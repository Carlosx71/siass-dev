'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true
    },
    dataDeNascimento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    naturalidadeUF: {
        type: String,
        required: true
    },
    naturalidadeMU: {
        type: String,
        required: true
    },
    numRG: {
        type: Number,
        required: true
    },
    cepArtesao: {
        type: Number,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numeroEnd: {
        type: String,
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
        type:String,
        required: true
    },
    emailArtesao: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

//Exportando o schema de artesão
module.exports = mongoose.model('Artesao', schema);