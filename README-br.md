# 📚 DNAT - Do Nada ao Tudo

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![br](https://img.shields.io/badge/lang-br-green.svg)](./README-br.md)

## 🌟 Visão Geral

**DNAT (Do Nada ao Tudo)** é um projeto com documentação organizada e acessível,
utilizando o [VitePress](https://vitepress.vuejs.org/), um gerador de sites
estáticos moderno e eficiente.

**Objetivos:**

- Prover uma plataforma de documentação abrangente e intuitiva.
- Facilitar o acesso a conteúdos sobre **crypto**, **blockchain**, **segurança**
  e muito mais.

## 🏗️ Estrutura do Projeto

```plaintext
.
├── .vitepress/
│   ├── config.ts               # Configuração principal do VitePress
│   └── locales/                # Configurações específicas por idioma
├── src/                        # Raiz de todas as páginas
│   ├── index.md                # Página inicial do projeto
│   └── <locale>/               # Pastas para cada idioma
│       ├── index.md            # Página inicial do idioma
│       └── <navbar>/           # Representa uma seção exibida na navbar
│           ├── index.md        # Introdução da seção
│           └── <folder>/       # Submenus exibidos na sidebar
└── README.md                   # Resumo geral do projeto
```

💡 **Dica:** Use essa estrutura como referência ao criar ou alterar páginas,
mantendo um padrão consistente.

## 🤝 Como Contribuir

Antes de qualquer coisa, faça um fork do repositório e clone-o para sua máquina.

### 💻 1. Desenvolvimento Local

#### 📦 Instalação

```bash
npm install
```

#### 🏃‍♂️ Execução

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

#### 🛠️ Compilação

```bash
npm run build
```

#### 👀 Preview do Build

```bash
npm run preview
```

---

### 📝 2. Adicionar Páginas

1. Navegue até `src/` e escolha a pasta do idioma.
2. Escolha a seção ou crie uma nova:
   - Para novos tópicos, crie uma pasta nomeada com **underline** `_` entre as
     palavras (serão convertidos em espaço).
   - Alternativamente, crie um arquivo `.md` dentro de uma pasta existente.
3. Escreva o conteúdo em **Markdown**.

---

### 🌐 3. Traduções

1. Crie um novo arquivo em `.vitepress/locales/` com a sigla do idioma.
2. Registre o novo idioma no `config.ts`:

```ts
locales: {
  ptbr: ptbr as any,
  en: en as any,
}
```

3. Crie uma pasta correspondente em `src/` e copie a estrutura existente para
   garantir consistência.
4. Mantenha os nomes de pastas e arquivos **iguais** entre idiomas — isso
   permite a tradução automática.

---

### 🚀 4. Commit e Envio de Alterações

**Padrão:** Usamos o **Conventional Commits**. Leia a
[documentação oficial](https://www.conventionalcommits.org/en/v1.0.0/).

#### Passos:

1. **Atualize seu branch:**

```bash
git pull origin main
```

2. **Adicione as alterações:**

```bash
git add .
```

3. **Inicie o commit:**

```bash
git commit
```

4. **Análise automática:**

- O **lint-staged** irá:

  - Ajustar a formatação.
  - Remover metadados indesejados.

![Lint-Staged](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/lint-staged.png)

5. **Finalize o commit:**

- O assistente irá orientar conforme o padrão **Conventional Commits**.

![Conventional Commits](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/conventional-commits.png)

6. **Envie as alterações:**

```bash
git push origin main
```

7. **Abra um Pull Request:**

- Abra um Pull Request para a branch `main`.

---

#### 💡 Boas Práticas de Commit

- Mensagens **claras e descritivas**, preferencialmente em inglês:

```plaintext
feat: add metadata removal support
fix: correct image formatting error
docs: update contribution guide
```

- **Teste localmente** antes de enviar.

## 📋 Boas Práticas

- **Organização por contexto:** Estruture as pastas conforme o tema ou seção.

- **Traduções sincronizadas:** Atualize todas as versões sempre que modificar ou
  criar conteúdo.

- **Consistência:** Siga o estilo e convenções já estabelecidas.

## 🔍 Exemplos de Markdown

### 🗂️ Listas Aninhadas

```markdown
- Categoria Principal
  - Subcategoria 1
    - Item 1
    - Item 2
  - Subcategoria 2
```

### 📊 Tabelas

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm install`   | Instala dependências               |
| `npm run dev`   | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção              |

### 💻 Blocos de Código

```javascript
const message = 'Olá, mundo!';
console.log(message);
```

## 📜 Licença

Este projeto está sob a **MIT License**. Confira o arquivo
[LICENSE](./LICENCE.txt) para mais detalhes.
