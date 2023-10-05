// server.js
const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json())

// Implementa los routers en las rutas correspondientes
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Resto de la configuración y rutas del servidor

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
