const express = require('express');
const path = require('path');
const serviciosRouter = require('./routes/servicios');

const app = express();
const PORT = 4242;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/servicios', serviciosRouter);

app.get('/', (req, res) => res.redirect('/servicios'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
