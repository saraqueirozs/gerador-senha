import express from "express";
import cors from "cors";
import passwordRoutes from "./routes/passwordRoutes";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();
app.use(cors());
app.use(express.json());
// Adicionar as rotas primeiro
app.use("/password", passwordRoutes);
// O Middleware de erro SEMPRE deve ser o último
app.use(errorHandler);
export default app;
