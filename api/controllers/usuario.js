"user strict";

var User = require("../models/usuario");
var bcrypt = require("bcrypt-nodejs");

function pruebas(req, res) {
  res.status(200).send({
    message:
      "Probando una accion del controlador de usuarios del api rest con node y mongo",
  });
}

function saveUser(req, res) {
  var user = new user();
  var params = new req.body();
  user.nombre = params.nombre;
  user.apellido = params.apellido;
  user.correo = params.correo;
  user.role = "ROLE_USER";
  user.imagen = "null";

  if (params.contraseña) {
    // encriptar contraseña y guardar datos
  } else {
    res.status(200).send({ message: "Introduce la contraseña" });
  }
}

module.exports = {
  pruebas,
  saveUser,
};
