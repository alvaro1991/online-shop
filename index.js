
const mongoose = require("mongoose");
const app = require('./app')
const port = process.env.PORT || 3001;


//Connection with MongoDB via mongoose and start app with express
mongoose.connect("mongodb://localhost:27017/shop", (err, res) => {
  if (err) {
    return console.log(`Error al conectar con BBDD: ${err}`);
  } else {
    console.log("Conexion a BBDD establecida");
  }

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  });
});

