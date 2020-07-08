"user strict";
var bcrypt = require("bcrypt-nodejs");
var Usuario = require("../models/usuario");

function pruebas(req, res) {
  res.status(200).send({
    message:
      "Probando una accion del controlador de usuarios del api rest con node y mongo",
  });
}

function saveUser(req, res) {
  var user = new Usuario();

  var params = req.body;

  console.log(params);

  user.nombre = params.nombre;
  user.apellidos = params.apellidos;
  user.correo = params.correo;
  user.role = "ROLE_USER";
  user.imagen = "null";

  if (params.contraseña) {
    //Encriptar contraseña y guardar datos
  } else {
    res.status(200).send({ message: "Introduce la contraseña" });
  }
}

module.exports = {
  pruebas,
};
