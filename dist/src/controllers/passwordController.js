import { PasswordService } from "../services/passwordService";
import { AppError } from "../errors/AppError";
export class PasswordController {
    constructor() {
        this.passwordService = new PasswordService();
    }
    generate(req, res) {
        try {
            const { length, useNumbers, useSymbols } = req.query;
            if (!length) {
                throw new AppError("O parâmetro 'length' é obrigatório.", 400);
            }
            const password = this.passwordService.generatePassword(Number(length), useNumbers === "true", useSymbols === "true");
            return res.json({ password });
        }
        catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
}
