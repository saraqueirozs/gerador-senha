import { PasswordService } from "./src/services/PasswordService";

const length = Number(process.argv[2]) || 12;
const useNumbers = process.argv.includes("--numbers");
const useSymbols = process.argv.includes("--symbols");

const passwordService = new PasswordService();
const password = passwordService.generatePassword(
  length,
  useNumbers,
  useSymbols
);

console.log(`Senha Gerada com sucesso: ${password}`);
