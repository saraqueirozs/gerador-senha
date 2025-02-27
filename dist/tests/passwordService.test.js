import { PasswordService } from "../src/services/passwordService";
describe("PasswordService", () => {
    const service = new PasswordService();
    test("Gera uma senha com comprimento correto", () => {
        const password = service.generatePassword(10, false, false);
        expect(password.length).toBe(10);
    });
    test("Gera uma senha contendo números", () => {
        const password = service.generatePassword(10, true, false);
        expect(password).toMatch(/\d/);
    });
    test("Gera uma senha contendo símbolos", () => {
        const password = service.generatePassword(10, false, true);
        expect(password).toMatch(/[!@#$%^&*()_\-+=<>?]/);
    });
    test("Erro ao gerar senha com menos de 6 caracteres", () => {
        expect(() => service.generatePassword(5, false, false)).toThrow();
    });
});
