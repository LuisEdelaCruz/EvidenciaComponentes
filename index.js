const express = require('express');
const path    = require('path');

const app  = express();
const PORT = 4242;

// Motor de plantillas: Express buscará archivos .ejs dentro de /views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Permite leer datos enviados desde formularios HTML (method="POST")
app.use(express.urlencoded({ extended: false }));

// Sirve archivos estáticos (CSS, imágenes) desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas del módulo de talleres
app.use('/talleres', require('./routes/talleres.routes'));

// Ruta raíz: muestra la página de inicio
app.get('/', (req, res) => res.render('home'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
