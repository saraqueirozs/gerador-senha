"use strict";
exports.__esModule = true;
exports.PasswordController = void 0;
var passwordService_1 = require("../services/passwordService");
var AppError_1 = require("../errors/AppError");
var PasswordController = /** @class */ (function () {
    function PasswordController() {
        this.passwordService = new passwordService_1.PasswordService();
    }
    PasswordController.prototype.generate = function (req, res) {
        try {
            var _a = req.query, length_1 = _a.length, useNumbers = _a.useNumbers, useSymbols = _a.useSymbols;
            if (!length_1) {
                throw new AppError_1.AppError("O parâmetro 'length' é obrigatório.", 400);
            }
            var password = this.passwordService.generatePassword(Number(length_1), useNumbers === "true", useSymbols === "true");
            return res.json({ password: password });
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor." });
        }
    };
    return PasswordController;
}());
exports.PasswordController = PasswordController;
