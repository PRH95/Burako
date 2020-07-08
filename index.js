"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Burako", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("La base de datos ha sido conectada exitosamente");
  }
});
