"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var passwordRoutes_1 = __importDefault(require("./routes/passwordRoutes"));
var errorHandler_1 = require("./middlewares/errorHandler");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
// Adicionar as rotas primeiro
app.use("/password", passwordRoutes_1["default"]);
// O Middleware de erro SEMPRE deve ser o último
app.use(errorHandler_1.errorHandler);
exports["default"] = app;
