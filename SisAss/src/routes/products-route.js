//Criado na aula 11
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/',controller.post);
//router.put('/:id',controller.put);
//router.delete('/',controller.delete);
router.delete('/:id', controller.delete);
router.post('/:id', controller.update);
router.get('/tags/:tag',controller.getByTag);
router.get('/admin/:id',controller.getById); //Tomar cuidado com conflito de rotas. Não esquecer de passar o ID pela URL no postman | Aula 19
router.get('/:id',controller.getById) //busca um produto pelo ID
router.get('/',controller.get); //get em products aula 17
router.get('/:slug', controller.getBySlug); //Envia slug como parametro para product-controller (repare que é "getBySlug" e não get)

module.exports = router;