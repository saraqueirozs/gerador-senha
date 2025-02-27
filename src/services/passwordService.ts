export interface IPasswordService {
  generatePassword(
    length: number,
    useNumbers: boolean,
    useSymbols: boolean
  ): string;
}

export class PasswordService implements IPasswordService {
  private characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numbers = "0123456789";
  private symbols = "!@#$%^&*()_-+=<>?";

  generatePassword(
    length: number,
    useNumbers: boolean,
    useSymbols: boolean
  ): string {
    if (length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }

    let chars = this.characters;
    if (useNumbers) chars += this.numbers;
    if (useSymbols) chars += this.symbols;

    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }
}
