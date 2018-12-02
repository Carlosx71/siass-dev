'use strict';
//Importando a model //aula 16
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Lista Produtos aula 17
exports.get = (req, res, next) => {
    Product.find({ //funciona como se fosse um select, exemplo: Product.find({product:"Panela de Pedra Sabao", description:"Feita de pedra e sabao"}); sem nada busca TUDO
        active: true
    }, 'product slug description materiaPrima peso dimensao segmento preco quantidade')

        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

//Rotas
//Rota de criação //Status 201 = Create //Movido na aula 12
exports.post = (req, res, next) => {
    var product = Product(req.body); //passa o produto como corpo da requição
    product
        .save() //Usado para salvar no mongoodb
        .then(x => {
            //res.status(201).send({ message: 'Produto cadastrado com sucesso' });
            res.redirect('http://localhost/cadastroSucessoProduto.html');
        }).catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o produto', data: e });
        });

};

//movido na aula 12
exports.put = (req, res, next) => {
    const id = req.params.id;//recupera os parametros que vem pela url
    res.status(200).send({
        id: id,
        item: req.body
    });
}

//Lista pelo slug aula 18
exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug, //recebe o slug como paramentro
            active: true
        }, 'product slug description materiaPrima peso dimensao segmento preco quantidade')

        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

//Lista pelo ID aula 19
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

//Lista pelo ID aula 20
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'product slug description materiaPrima peso dimensao segmento preco quantidade') //Os campos que estão dentro da string, são os que vão aparecer
        .then(data => {
            res.status(200).send(data); //retorna o json
        }).catch(e => {
            res.status(400).send(e);
        });
};

//movido na aula 12
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

//Editar artesão
exports.update = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            //$set seta o que veio da requisao
            $set: {
                product: req.body.product,
                materiaPrima: req.body.materiaPrima,
                peso: req.body.peso,
                artesao: req.body.artesao,
                description: req.body.description,
                dimensao: req.body.dimensao,
                materiaPrima: req.body.materiaPrima,
                peso: req.body.peso,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
                segmento: req.body.segmento
            }
        }).then(x => {
            res.redirect('http://localhost/editSucessoProduto.html');
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar Produto',
                data: e
            });
        });
};

//Rota de delete
exports.delete = (req, res, next) => {
    const { id } = req.params;
    Product
        .deleteOne({
            _id: id
        })
        .then(x => {
            res.status(200).send({
                message: 'Produto excluído com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao excluir produto',
                data: e
            });
        });
};