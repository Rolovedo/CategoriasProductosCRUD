//Inicia el servidor y configura todo lo necesario
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); //Permite peticiones desde otros origenes
app.use(express.json()); //permite recibir datos en formato JSON

//Aqui se cargan las rutas de productos y categorias
require('./routes/product.routes')(app);
require('./routes/category.routes')(app);

//recibe el puerto definido en .env o en el 3001 por defecto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${PORT}`);
});