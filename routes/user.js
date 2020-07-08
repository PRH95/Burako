"use strict";

var express = require("express");
var userController = require("../controllers/usuario");

var api = express.Router();

api.get("/probandoControlador", userController.pruebas);

module.exports = api;
