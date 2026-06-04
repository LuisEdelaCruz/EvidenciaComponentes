const express = require('express');
const app = express();
const PORT = 4242;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
