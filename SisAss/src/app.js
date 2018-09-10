'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)
// Da uma olhada no fs = require('fs'); isso permite apontar para as paginas html
//Importando pacotes (Elas vem da pasta node_modules)
const express = require('express');
const bodyParser = require('body-Parser'); //Este pacote converte o corpo da requisição para json
const mongoose = require('mongoose'); //Instalei um pacote via npm na aula 14
const app = express();
const router = express.Router();
//Conecta ao banco aula 14
//mongoose.connect('mongodb://siassmaster:siass4321@ds018508.mlab.com:18508/siassmaster');
//Conecta ao banco aula 14 o conjunto { useNewUrlParser: true } coloquei, pois sem isso a conexão não valida depois de um tempo
mongoose.connect("mongodb://siassmaster:siass4321@ds018508.mlab.com:18508/siassmaster", { useNewUrlParser: true });

//Carregar models aula 16
const Product = require('./models/product');
const Artesao = require('./models/artesao');
//carrega a pasta com as views, css e js
app.use(express.static('../src/view/'));

//carregar rotas que estão em index
const indexRoute = require('./routes/index-route');
//carregar rotas de products
const productRoute = require('./routes/products-route');
//carregar rotas de artesãos
const artesaoRoute = require('./routes/artesao-route');
app.use(bodyParser.json()); //converte todo conteudo do corpo(corpo da requisição) pra Json
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL

//Traz as rotas
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/artesao', artesaoRoute);
module.exports = app;