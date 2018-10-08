//Movendo rotas na aula 11
'use strict';

const express = require('express');
const router = express.Router();
const path = require('path'); //traz o diretorio aonde o projeto esta instalado
//const load = express();

//load.use(express.static('../src/public/'));

//const path = __dirname;
//console.log(path);
//Rota de leitura //Status 200 = OK //Aula 10
router.get('/', (req, res, next) => {
    res.sendFile(200, path.resolve('../src/public/index.html'))//path.resolve serve para que se consiga subir niveis nas pastas
   //res.status(200).send({ title: "SisAss", version: "0.0.1", description: "Vocês são tudo gays" })
});

module.exports = router;