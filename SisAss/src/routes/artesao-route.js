const express = require('express');
const router = express.Router();
const controller = require('../controllers/artesao-controller');

router.post('/',controller.post);
router.post('/:id',controller.update);
router.get('/countEst',controller.countEst);
router.get('/artAlfabetica',controller.artAlfabetica);
router.get('/artAlfabeEst',controller.artAlfabeEst);
//router.get('/pagination', controller.pagination);
router.get('/pagination/:page',controller.pagination);
//router.delete('/',controller.delete);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);
router.get('/cadasSucess', controller.cadasSucess);
//router.get('/tags/:tag',controller.getByTag);
//router.get('/admin/:id',controller.getById); //Tomar cuidado com conflito de rotas. Não esquecer de passar o ID pela URL no postman | Aula 19
router.get('/',controller.get); //get em products aula 17
//router.get('/:slug', controller.getBySlug);

module.exports = router;