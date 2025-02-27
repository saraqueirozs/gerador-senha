"use strict";
exports.__esModule = true;
exports.PasswordService = void 0;
var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this.characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.numbers = "0123456789";
        this.symbols = "!@#$%^&*()_-+=<>?";
    }
    PasswordService.prototype.generatePassword = function (length, useNumbers, useSymbols) {
        if (length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres.");
        }
        var chars = this.characters;
        if (useNumbers)
            chars += this.numbers;
        if (useSymbols)
            chars += this.symbols;
        return Array.from({ length: length }, function () { return chars[Math.floor(Math.random() * chars.length)]; }).join("");
    };
    return PasswordService;
}());
exports.PasswordService = PasswordService;
