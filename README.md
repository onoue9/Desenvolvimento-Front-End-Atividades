# 🌱 Associação Semente de Empoderamento

Um site institucional acessível e responsivo para uma ONG fictícia, desenvolvido como parte de uma atividade acadêmica com foco em **boas práticas de desenvolvimento web**, **acessibilidade (WCAG 2.1 Nível AA)** e **otimização para produção**.

> **"Semear a esperança, colher o empoderamento."**

---

## 🎯 Objetivos do Projeto

- Criar um site institucional com três páginas principais: **Home**, **Projetos** e **Cadastro**.
- Implementar uma **aplicação SPA (Single Page Application)** sem recarga de página.
- Integrar um **framework frontend** (Bootstrap).
- Garantir **acessibilidade total** conforme **WCAG 2.1 Nível AA**.
- Aplicar **minificação de HTML, CSS, JS e compressão de imagens** para produção.
- Fazer deploy em **GitHub Pages**.

---

## ✨ Recursos Implementados

### ✅ Navegação SPA
- Navegação entre páginas sem recarga.
- Estado mantido com JavaScript puro.

### ✅ Acessibilidade (WCAG 2.1 Nível AA)
- Estrutura semântica correta (`<header>`, `<main>`, `<section>`, etc.).
- Navegação 100% por teclado (Tab/Enter).
- Contraste mínimo de 4.5:1 em todos os textos.
- Suporte a leitores de tela (ARIA, `aria-live`, foco gerenciado).
- Modo claro/escuro com alternância manual e respeito às preferências do sistema.
- Suporte a modo de alto contraste.

### ✅ Design Responsivo
- Layout adaptável para mobile, tablet e desktop.
- Uso do sistema de grid do Bootstrap.

### ✅ Otimização para Produção
- Minificação automática de HTML, CSS e JavaScript.
- Compressão de imagens (via Squoosh.app ou script automatizado).
- Pasta de produção (`dist/`) pronta para deploy.

### ✅ Funcionalidades
- Formulário de cadastro com validação em tempo real.
- Armazenamento de dados no `localStorage`.
- Toasts de feedback com suporte a leitores de tela.
- Alternância entre modo claro e escuro, com preferência salva.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** + **CSS3** + **JavaScript (ES6+)**  
- **Bootstrap 5** (framework CSS/JS para layout e componentes)  
- **Webpack/Terser/Clean-CSS** (para minificação — via script personalizado)  
- **GitHub Pages** (hospedagem estática)  

> ✨ Projeto **100% estático** — sem backend. Todos os dados são armazenados no `localStorage` do navegador.

---

## ▶️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/associacao-semente.git
   cd associacao-semente