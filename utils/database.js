//Generacion de simulacion de datos creados en el primer intento de la competencia ajustado a segundo intento Carlos Gomez
const talleres = [
  { id: 1, nombre: 'Pantalon',  talla: 500,  prendas: 12 },
  { id: 2, nombre: 'Playera',   talla: 350, prendas : 15 },
  { id: 3, nombre: 'Chamarra', talla: 650,  prendas: 8  },
  { id: 4, nombre: 'calcetines',  talla: 500,  prendas: 12 },
  { id: 5, nombre: 'Ropa interior hombre',   talla: 1500, prendas: 9  },
  { id: 6, nombre: 'Chaleco',   talla: 1500, prendas: 9  },
];

const inscripciones = [];

// Devuelve todos los talleres
function getTalleres() {
  return talleres;
}

// Busca un taller por su ID
function getTallerPorId(id) {
  return talleres.find(t => t.id === parseInt(id));
}

// Verifica si un correo ya está inscrito en un taller específico
function yaInscrito(email, tallerId) {
  return inscripciones.some(i => i.email === email && i.tallerId === parseInt(tallerId));
}

// Guarda la inscripción y reduce el cupo del taller
function inscribir(datos) {
  const taller = getTallerPorId(datos.tallerId);
  taller.cupo -= 1;

  const nueva = {
    id: inscripciones.length + 1,
    ...datos,
    fecha: new Date().toLocaleDateString('es-MX'),
  };
  inscripciones.push(nueva);
  return nueva;
}

// Devuelve todas las inscripciones de un taller
function getInscripcionesPorTaller(tallerId) {
  return inscripciones.filter(i => i.tallerId === parseInt(tallerId));
}

function cancelarRegistro(registroId) {
  const idx = registros.findIndex(r => r.id === parseInt(registroId));
  if (idx === -1) return false;
  const itemId = registros[idx].itemId;
  const item = getItemPorId(itemId);
  item.cupo += 1;
  registros.splice(idx, 1);
  return true;
}

module.exports = { getTalleres, getTallerPorId, yaInscrito, inscribir, getInscripcionesPorTaller };


function getPrueba(){
  return 0
}