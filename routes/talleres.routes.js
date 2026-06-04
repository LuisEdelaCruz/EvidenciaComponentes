const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/talleresController');

// GET /talleres         → lista todos los talleres
router.get('/', ctrl.listar);

// GET /talleres/:id     → detalle de un taller + formulario de inscripción
router.get('/:id', ctrl.detalle);

// POST /talleres/:id/inscribir → procesa el formulario
router.post('/:id/inscribir', ctrl.inscribirTaller);

// GET /talleres/:id/inscritos  → lista de personas inscritas
router.get('/:id/inscritos', ctrl.inscritos);

module.exports = router;
