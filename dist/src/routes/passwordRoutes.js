import { Router } from "express";
import { PasswordController } from "../controllers/passwordController";
const router = Router();
const passwordController = new PasswordController(); // Criando uma instância da classe
router.get("/generate", (req, res) => passwordController.generate(req, res));
export default router;
