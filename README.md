# Documentação do Projeto

---

### **LandingBase – Landing Page Personalizável**

---

### 📌 Visão Geral

**LandingBase** é um projeto de landing page moderna e 100% configurável por JSON. Ele foi pensado para ser reutilizado em diversos contextos como:

- Produtos digitais (apps, SaaS)
- Eventos online
- Freelancers/consultores
- Lançamentos ou promoções

O objetivo é praticar frontend moderno com foco em **modularidade, reusabilidade, acessibilidade e SEO**.

---

### 🚀 Tecnologias Utilizadas

| Área | Ferramenta |
| --- | --- |
| Framework | React (Vite ou Next.js) |
| Estilos | TailwindCSS |
| Dados | JSON externo para configuração |
| Deploy | Vercel, Netlify ou GitHub Pages |
| Animações | Framer Motion ou AOS (opcional) |
| Outras libs | Heroicons, Lucide, clsx (opcional) |

---

### 🧱 Estrutura Modular do Projeto

O projeto é dividido em componentes reutilizáveis e baseados em dados.

Cada componente recebe props a partir de um arquivo de configuração JSON.

### Exemplo de seções personalizáveis:

| Seção | Fonte de dados | Comentário |
| --- | --- | --- |
| Header | `header` | Links e logo configuráveis |
| Hero Section | `hero` | Título, subtítulo, imagem e CTA |
| Funcionalidades | `features[]` | Lista dinâmica com ícones |
| Depoimentos | `testimonials[]` | Cards de feedback |
| FAQ | `faq[]` | Acordeão de perguntas |
| CTA Final | `cta` | Chamada para ação visual |
| Footer | `footer` | Links e redes sociais |

---

### 🧩 Exemplo de Configuração (`landing.json`)

```json
{
  "hero": {
    "title": "Organize sua rotina com facilidade",
    "subtitle": "Use nossa ferramenta para planejar, executar e vencer o dia.",
    "ctaText": "Comece agora",
    "image": "/img/hero.svg"
  },
  "features": [
    {
      "icon": "clock",
      "title": "Rápido e eficiente",
      "description": "Feito para você começar em minutos."
    },
    {
      "icon": "check",
      "title": "100% customizável",
      "description": "Altere textos, imagens e seções com facilidade."
    }
  ],
  "testimonials": [
    {
      "name": "Maria",
      "role": "Empreendedora",
      "feedback": "Foi muito fácil criar uma landing usando esse modelo!"
    }
  ],
  "faq": [
    {
      "question": "Preciso saber programar para usar?",
      "answer": "Não! Basta alterar um arquivo JSON simples."
    }
  ],
  "footer": {
    "socials": [
      { "platform": "Twitter", "url": "https://twitter.com/seuusuario" },
      { "platform": "GitHub", "url": "https://github.com/seuprojeto" }
    ],
    "links": [
      { "label": "Termos de uso", "url": "/termos" }
    ]
  }
}

```

---

## ✅ Lista de Tarefas (Planejamento do Projeto)

Organizadas por etapas lógicas com foco em aprendizado progressivo.

---

### 📁 Etapa 1 – Setup Inicial (🎯 Base do Projeto)

- [ ]  Criar repositório `landingbase` no GitHub
- [ ]  Criar projeto com Vite ou Next.js
- [ ]  Instalar TailwindCSS e configurar
- [ ]  Criar estrutura de pastas:
    
    ```
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── sections/
    │   ├── config/
    │   │   └── landing.json
    │   ├── App.jsx
    │   └── main.jsx
    └── index.html
    
    ```
    

---

### 🧱 Etapa 2 – Componentização

Criação de seções baseadas nos dados do `landing.json`.

- [ ]  `Header.jsx` – logo + links
- [ ]  `Hero.jsx` – título, subtítulo, imagem, botão
- [ ]  `Features.jsx` – lista de cards a partir do array
- [ ]  `Testimonials.jsx` – cards com nome, função e feedback
- [ ]  `FAQ.jsx` – acordeão com perguntas e respostas
- [ ]  `CTASection.jsx` – chamada final com botão
- [ ]  `Footer.jsx` – links e redes sociais

---

### 🔄 Etapa 3 – Integração com JSON

- [ ]  Criar contexto ou hook para importar `landing.json`
- [ ]  Passar dados do JSON para todos os componentes via props
- [ ]  Adicionar validações básicas (ex: campo ausente → fallback)

---

### 🎨 Etapa 4 – Estilização e Responsividade

- [ ]  Criar estilos com Tailwind responsivos
- [ ]  Testar em mobile, tablet e desktop
- [ ]  Usar sistema de grid com boas práticas
- [ ]  Adicionar dark mode (opcional)

---

### ⚙️ Etapa 5 – Funcionalidades Extras

- [ ]  Scroll suave entre seções
- [ ]  Lazy loading de imagens
- [ ]  Animações com Framer Motion ou AOS
- [ ]  Componente de formulário de contato (opcional)
- [ ]  Suporte a múltiplos arquivos JSON (multi-landing)

---

### 🔍 Etapa 6 – Acessibilidade e SEO

- [ ]  Tags semânticas (`<main>`, `<section>`, `<footer>`, etc.)
- [ ]  `alt` em todas as imagens
- [ ]  `aria-*` onde necessário (accordion, botões)
- [ ]  Meta tags para SEO básico (title, description)
- [ ]  Teste com Lighthouse (mínimo 90 em todos os critérios)

---

### 🌐 Etapa 7 – Deploy

- [ ]  Fazer deploy no Vercel ou Netlify
- [ ]  Criar README com:
    - Link do projeto online
    - Como usar o JSON
    - Como rodar localmente
    - Screenshots
- [ ]  Divulgar no seu portfólio e LinkedIn

---

### 🎁 Etapa 8 – (Extras opcionais)

- [ ]  CLI para gerar novas landings a partir de um template
- [ ]  Integração com CMS (ex: Strapi ou Sanity)
- [ ]  Adicionar suporte para upload de imagens via painel
- [ ]  Criar interface para edição visual (modo admin)

---

Se quiser, posso:

- Gerar um esqueleto inicial em React + Tailwind já com `landing.json` conectado
- Montar um exemplo do `Hero.jsx` já lendo dados do JSON

Você quer que eu crie essa base agora para você?
