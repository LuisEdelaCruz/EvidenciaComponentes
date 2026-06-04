const { getTalleres, getTallerPorId, yaInscrito, inscribir, getInscripcionesPorTaller } = require('../utils/database');

// Muestra la página de inicio
function home(req, res) {
  res.render('home');
}

// Obtiene todos los talleres y los manda a la vista
function listar(req, res) {
  const talleres = getTalleres();
  res.render('talleres', { talleres });
}

// Busca un taller por ID; si no existe responde con 404
function detalle(req, res) {
  const taller = getTallerPorId(req.params.id);
  if (!taller) return res.status(404).send('Taller no encontrado');
  res.render('detalleTaller', { taller, error: null });
}

// Procesa el formulario de inscripción con validaciones básicas
function inscribirTaller(req, res) {
  const taller = getTallerPorId(req.params.id);
  if (!taller) return res.status(404).send('Taller no encontrado');

  const { nombre, email } = req.body;

  // Valida que los campos no estén vacíos
  if (!nombre || !email) {
    return res.render('detalleTaller', { taller, error: 'Todos los campos son obligatorios.' });
  }

  // Verifica que queden lugares disponibles
  if (taller.cupo <= 0) {
    return res.render('detalleTaller', { taller, error: 'Este taller ya no tiene cupo.' });
  }

  // Evita inscripciones duplicadas por correo
  if (yaInscrito(email, taller.id)) {
    return res.render('detalleTaller', { taller, error: 'Este correo ya está inscrito en el taller.' });
  }

  const inscripcion = inscribir({ nombre, email, tallerId: taller.id, tallerNombre: taller.nombre });
  res.render('confirmacion', { inscripcion, taller });
}

// Devuelve la lista de personas inscritas en un taller
function inscritos(req, res) {
  const taller = getTallerPorId(req.params.id);
  if (!taller) return res.status(404).send('Taller no encontrado');
  const lista = getInscripcionesPorTaller(taller.id);
  res.render('inscritos', { taller, lista });
}

module.exports = { home, listar, detalle, inscribirTaller, inscritos };
