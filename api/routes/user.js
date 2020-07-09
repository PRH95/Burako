"use strict";

var express = require("express");
var userController = require("../controllers/usuario");
const { saveUser } = require("../controllers/usuario");

var api = express.Router();

api.get("/probandoControlador", userController.pruebas);
api.get("/register", saveUser);

module.exports = api;
