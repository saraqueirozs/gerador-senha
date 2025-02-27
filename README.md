## Gerador de Senhas (em construção)

Este é um gerador de senhas desenvolvido em **Node.js** e **TypeScript**, seguindo boas práticas de desenvolvimento como **SOLID**, **arquitetura MVC**, **tratamento de erros** e **testes unitários**.

### Tecnologias Utilizadas

- **Node.js** + **Express**
- **TypeScript**
- **Jest** (testes unitários)
- **ts-node**
- **dotenv**
- **cors**

---

### Passo a passo

1. Clone o repositório

```sh
git clone https://github.com/saraqueirozs/gerador-senha.git
```

2. Instale as dependencias e rode localmente

```sh
npm install
npm run build  # Compila TypeScript
npm start      # Inicia o servidor (http://localhost:3000)
```

### Como utilizar

#### Gerando senha pelo terminal, use o seguinte comando:

```sh
npx ts-node generate-password.ts 16 --numbers --symbols

// saída esperada:
Senha Gerada com sucesso: qA!9bZ@C1x5$yP#R
```

#### Gerando senha via cURL

```sh
curl "http://localhost:3000/password/generate?length=16&useNumbers=true&useSymbols=true"

// saída esperada:

{
  "password": "aT9@bC1&Zx5$yP"
}
```
