'use strict'

const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.get = (req, res, next) => {
    Event.find({ //funciona como se fosse um select, exemplo: Product.find({product:"Panela de Pedra Sabao", description:"Feita de pedra e sabao"}); sem nada busca TUDO
        active: true
    }, 'product slug description materiaPrima peso dimensao segmento preco quantidade')
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};