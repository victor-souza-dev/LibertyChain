# 📚 DNAT - From Nothing to Everything

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![br](https://img.shields.io/badge/lang-br-green.svg)](./README-br.md)

## 🌟 Overview

**DNAT (From Nothing to Everything)** is a project with organized and accessible
documentation, using [VitePress](https://vitepress.vuejs.org/), a modern and
efficient static site generator.

**Goals:**

- Provide a comprehensive and intuitive documentation platform.
- Facilitate access to content about **crypto**, **blockchain**, **security**
  and much more.

## 🏗️ Project Structure

```plaintext
.
├── .vitepress/
│   ├── config.ts               # Main VitePress configuration
│   └── locales/                # Language-specific configurations
├── src/                        # Root of all pages
│   ├── index.md                # Project homepage
│   └── <locale>/               # Folders for each language
│       ├── index.md            # Language homepage
│       └── <navbar>/           # Represents a section shown in navbar
│           ├── index.md        # Section introduction
│           └── <folder>/       # Submenus shown in sidebar
└── README.md                   # Project general overview
```

💡 **Tip:** Use this structure as a reference when creating or modifying pages,
maintaining a consistent pattern.

## 🤝 How to Contribute

Before anything else, fork the repository and clone it to your machine.

### 💻 1. Local Development

#### 📦 Installation

```bash
npm install
```

#### 🏃‍♂️ Running

```bash
npm run dev
```

Access: [http://localhost:5173](http://localhost:5173)

#### 🛠️ Build

```bash
npm run build
```

#### 👀 Build Preview

```bash
npm run preview
```

---

### 📝 2. Adding Pages

1. Navigate to `src/` and choose the language folder.
2. Choose a section or create a new one:
   - For new topics, create a folder named with **underscore** `_` between words
     (they will be converted to spaces).
   - Alternatively, create a `.md` file inside an existing folder.
3. Write the content in **Markdown**.

---

### 🌐 3. Translations

1. Create a new file in `.vitepress/locales/` with the language code.
2. Register the new language in `config.ts`:

```ts
locales: {
  ptbr: ptbr as any,
  en: en as any,
}
```

3. Create a corresponding folder in `src/` and copy the existing structure to
   ensure consistency.
4. Keep folder and file names **identical** between languages — this enables
   automatic translation.

---

### 🚀 4. Commit and Submit Changes

**Standard:** We use **Conventional Commits**. Read the
[official documentation](https://www.conventionalcommits.org/en/v1.0.0/).

#### Steps:

1. **Update your branch:**

```bash
git pull origin main
```

2. **Add changes:**

```bash
git add .
```

3. **Start commit:**

```bash
git commit
```

4. **Automatic analysis:**

- **lint-staged** will:

  - Adjust formatting.
  - Remove unwanted metadata.

![Lint-Staged](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/lint-staged.png)

5. **Finish commit:**

- The assistant will guide you according to the **Conventional Commits**
  standard.

![Conventional Commits](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/conventional-commits.png)

6. **Push changes:**

```bash
git push origin main
```

7. **Open a Pull Request:**

- Open a Pull Request to the `main` branch.

---

#### 💡 Commit Best Practices

- **Clear and descriptive** messages, preferably in English:

```plaintext
feat: add metadata removal support
fix: correct image formatting error
docs: update contribution guide
```

- **Test locally** before submitting.

## 📋 Best Practices

- **Context-based organization:** Structure folders according to theme or
  section.

- **Synchronized translations:** Update all versions whenever modifying or
  creating content.

- **Consistency:** Follow established style and conventions.

## 🔍 Markdown Examples

### 🗂️ Nested Lists

```markdown
- Main Category
  - Subcategory 1
    - Item 1
    - Item 2
  - Subcategory 2
```

### 📊 Tables

| Command         | Description              |
| --------------- | ------------------------ |
| `npm install`   | Install dependencies     |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |

### 💻 Code Blocks

```javascript
const message = 'Hello, world!';
console.log(message);
```

## 📜 License

This project is under the **MIT License**. Check the [LICENSE](./LICENCE.txt)
file for more details.
