'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/event-controller');

router.get('/', controller.get);
router.get('/:id',controller.getById);
router.post('/', controller.post);
router.post('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
