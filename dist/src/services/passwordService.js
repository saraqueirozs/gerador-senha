export class PasswordService {
    constructor() {
        this.characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.numbers = "0123456789";
        this.symbols = "!@#$%^&*()_-+=<>?";
    }
    generatePassword(length, useNumbers, useSymbols) {
        if (length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres.");
        }
        let chars = this.characters;
        if (useNumbers)
            chars += this.numbers;
        if (useSymbols)
            chars += this.symbols;
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    }
}
