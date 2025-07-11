# 👋 [Gavin Algin] - Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my skills, projects, and experience as a [your profession, e.g., software developer, designer, data scientist].

---

## 💼 About Me

Hi! I'm [Gavin Algin], a passionate [software developer, engineer and data scientist] specializing in [software engineering]. I enjoy creating impactful solutions, learning new technologies, and sharing knowledge.

- 🌍 Location: [South Africa, Limpopo, Polokwane]
- 💻 Tech Stack: [Typescript, JavaScript, React, Python, Java, C#, C++, .Net, Next.js, Vite, React native expo, Electron, Django, Springboot, MERN]
- 📫 Contact: [gavinkidart65@gmail.com]

---

## 🚀 Portfolio Highlights

Here are some featured projects:

| Project       | Description                                  | Link                        |
| ------------- | -------------------------------------------- | --------------------------- |
| Expandly   | Tech website which showcases business services             | [Github Pages](http://...)     |
| Insight Evolution   | Mobile learning management system and ecommerce             | [Playstore]()   |
| TaskCo. | An AI productivity chrome extension           | [Live Demo](chrome store)     |

---

## 🛠️ Built With

- HTML5 & CSS3 (or TailwindCSS, Bootstrap)
- JavaScript (or TypeScript)
- Frameworks: React / Vue / Angular (if applicable)
- Backend: Node.js / Django / Flask (if applicable)
- Hosting: GitHub Pages / Netlify / Vercel

---

## 📂 Repository Structure

```plaintext
/ ── Root directory
├── assets/          # Images, icons, fonts
├── components/      # Reusable UI components
├── pages/           # Portfolio pages
├── styles/          # CSS or styling files
└── README.md        # This file


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
