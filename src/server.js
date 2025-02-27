"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv/config"); // Carrega as variáveis de ambiente
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT || 3000;
app_1["default"].listen(PORT, function () {
    console.log("\uD83D\uDE80 Servidor rodando na porta ".concat(PORT));
});
