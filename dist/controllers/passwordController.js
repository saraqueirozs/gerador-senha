"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordController = void 0;
const passwordService_1 = require("../services/passwordService");
const AppError_1 = require("../errors/AppError");
class PasswordController {
    constructor() {
        this.passwordService = new passwordService_1.PasswordService();
    }
    generate(req, res) {
        try {
            const { length, useNumbers, useSymbols } = req.query;
            if (!length) {
                throw new AppError_1.AppError("O parâmetro 'length' é obrigatório.", 400);
            }
            const password = this.passwordService.generatePassword(Number(length), useNumbers === "true", useSymbols === "true");
            return res.json({ password });
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
}
exports.PasswordController = PasswordController;
