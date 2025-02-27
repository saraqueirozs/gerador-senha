"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passwordRoutes_1 = __importDefault(require("./routes/passwordRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Adicionar as rotas primeiro
app.use("/password", passwordRoutes_1.default);
// O Middleware de erro SEMPRE deve ser o último
app.use(errorHandler_1.errorHandler);
exports.default = app;
