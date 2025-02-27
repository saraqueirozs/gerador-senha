"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passwordController_1 = require("../controllers/passwordController");
const router = (0, express_1.Router)();
const passwordController = new passwordController_1.PasswordController(); // Criando uma instância da classe
router.get("/generate", (req, res) => passwordController.generate(req, res));
exports.default = router;
