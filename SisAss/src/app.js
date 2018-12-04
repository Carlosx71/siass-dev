'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)
// Da uma olhada no fs = require('fs'); isso permite apontar para as paginas html
//Importando pacotes (Elas vem da pasta node_modules)
const express = require('express');
const bodyParser = require('body-Parser'); //Este pacote converte o corpo da requisição para json
const mongoose = require('mongoose'); //Instalei um pacote via npm na aula 14
const app = express();
const router = express.Router();
//Conecta ao banco aula 14 o conjunto { useNewUrlParser: true } coloquei, pois sem isso a conexão não valida depois de um tempo
mongoose.connect("mongodb://siassmaster:siass4321@ds018508.mlab.com:18508/siassmaster", { useNewUrlParser: true });

//Carregar models aula 16
const Product = require('./models/product');
const Artesao = require('./models/artesao');
const Event = require('./models/event');
//carrega a pasta com as views, css e js
app.use(express.static('../src/public/'));

//carregar rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');
const artesaoRoute = require('./routes/artesao-route');
const eventRoute = require('./routes/event-route');

//app.use(bodyParser.json()); //converte todo conteudo do corpo(corpo da requisição) pra Json
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL

//Traz as rotas
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/artesao', artesaoRoute);
app.use('/event', eventRoute);

module.exports = app;