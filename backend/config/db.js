//Configuracion de la conexion a la base de datos MySQL usando variables de entorno
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

//Se crea la conexion usando los valores definidos en el archivo .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//Se establece la conexion y se muestra un mensaje en consola si es exitosa
connection.connect(error => {
  if (error) throw error;
  console.log("Conexion exitosa a la base de datos");
});

module.exports = connection;
