// Datos en memoria: simula una base de datos 
const talleres = [
  { id: 1, nombre: 'Cerámica',  precio: 500,  cupo: 12 },
  { id: 2, nombre: 'Pintura',   precio: 350,  cupo: 15 },
  { id: 3, nombre: 'Escultura', precio: 650,  cupo: 1  },
  { id: 4, nombre: 'Textiles',  precio: 500,  cupo: 12 },
  { id: 5, nombre: 'Joyería',   precio: 1500, cupo: 9  },
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

module.exports = { getTalleres, getTallerPorId, yaInscrito, inscribir, getInscripcionesPorTaller };


function getPrueba(){
  return 0
}