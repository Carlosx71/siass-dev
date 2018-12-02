'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//aula 15 como fazer as models

//Este é o corpo da model
const schema = new Schema({
    //mongo faz ID automaticamente
    product: {
        type: String,
        required: true, // É requerido
        trim: true //não permite espaços
    },
    /*slug: { // O slug faz ficar desta maneira exemplo "cadeira gamer" = cadeira-gamer
        type: String,
        required: [false, 'O slug é obrigatório'],
        trim: true,
        index: true, // precisa de um indice por que precisa fazer uma busca por ele.
        unique: true //precisa ser único
    },*/
    description: {
        type: String,
        required: true
    },
    materiaPrima: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    dimensao: {
        type: String,
        required: true
    },   
    imgProd: {
        type: String,
        required: true
    },
    segmento: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    artesao: {
        type: String,
        required: true
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

//Exportando o schema aula 15
module.exports = mongoose.model('Product', schema);