"use strict";
exports.__esModule = true;
var passwordService_1 = require("../src/services/passwordService");
describe("PasswordService", function () {
    var service = new passwordService_1.PasswordService();
    test("Gera uma senha com comprimento correto", function () {
        var password = service.generatePassword(10, false, false);
        expect(password.length).toBe(10);
    });
    test("Gera uma senha contendo números", function () {
        var password = service.generatePassword(10, true, false);
        expect(password).toMatch(/\d/);
    });
    test("Gera uma senha contendo símbolos", function () {
        var password = service.generatePassword(10, false, true);
        expect(password).toMatch(/[!@#$%^&*()_\-+=<>?]/);
    });
    test("Erro ao gerar senha com menos de 6 caracteres", function () {
        expect(function () { return service.generatePassword(5, false, false); }).toThrow();
    });
});
