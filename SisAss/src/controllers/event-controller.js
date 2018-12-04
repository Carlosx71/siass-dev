'use strict'

const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.get = (req, res, next) => {
    Event.find()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    const event = Event(req.body); //passa o produto como corpo da requição
    event
        .save() //Usado para salvar no mongoodb
        .then(x => {
            res.redirect('http://localhost/cadastroSucessoEvento.html');
        }).catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o evento', data: e });
        });
};

exports.update = (req, res, next) => {
    Event
        .findByIdAndUpdate(req.params.id, {
            //$set seta o que veio da requisao
            $set: {
                evento: req.body.evento,
                dataEvento: req.body.dataEvento,
                hora: req.body.hora,
                cep: req.body.cep,
                rua: req.body.rua,
                numeroEnd: req.body.numeroEnd,
                cepArtesao: req.body.cepArtesao,
                complemento: req.body.complemento,
                numeroEnd: req.body.numeroEnd,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                uf: req.body.uf,
                dataCriacao: req.body.dataCriacao
            }
        }).then(x => {
            res.redirect('http://localhost/editSucessoArtesao.html');
            //res.status(201).send({                message: 'Artesao atualizado com sucesso'            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar event',
                data: e
            });
        });
};

exports.getById = (req, res, next) => {
    Event
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

//Rota de delete
exports.delete = (req, res, next) => {
    const { id } = req.params;
    Event
        .deleteOne({
            _id: id
        })
        .then(x => {
            res.status(200).send({
                message: 'Evento excluído com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao excluir evento',
                data: e
            });
        });
};