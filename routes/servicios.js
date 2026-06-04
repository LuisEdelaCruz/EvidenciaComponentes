const express = require('express');
const router = express.Router();
const { listar, detalle } = require('../controllers/serviciosController');

router.get('/', listar);
router.get('/:id', detalle);

module.exports = router;
