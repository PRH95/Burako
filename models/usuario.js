"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  facebook: String,
  google: String,
  imagen: String,
  contraseña: String,
  rol: String,
});

module.exports = mongoose.model("usuario", userSchema);
