
const mongoose = require("mongoose");
const app = require('./app')
const config = require('./config')


//Connection with MongoDB via mongoose and start app with express
mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar con BBDD: ${err}`);
  } else {
    console.log("Conexion a BBDD establecida");
  }

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`);
  });
});

