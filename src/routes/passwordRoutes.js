"use strict";
exports.__esModule = true;
var express_1 = require("express");
var passwordController_1 = require("../controllers/passwordController");
var router = (0, express_1.Router)();
var passwordController = new passwordController_1.PasswordController(); // Criando uma instância da classe
router.get("/generate", function (req, res) { return passwordController.generate(req, res); });
exports["default"] = router;
