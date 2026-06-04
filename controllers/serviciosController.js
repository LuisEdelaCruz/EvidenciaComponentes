const { getTodos, getPorId } = require('../utils/database');

function listar(req, res) {
  const servicios = getTodos();
  res.render('servicios', { servicios });
}

function detalle(req, res) {
  const servicio = getPorId(req.params.id);
  if (!servicio) return res.status(404).render('404');
  res.render('detalle', { servicio });
}

module.exports = { listar, detalle };
