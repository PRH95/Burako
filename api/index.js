"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3977;

mongoose.connect("mongodb://localhost:27017/Burako", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("La base de datos ha sido conectada exitosamente");

    app.listen(port, function () {
      console.log(
        `Servidor de API rest usuarios escuchando en http://localhost: ${port}`
      );
    });
  }
});
