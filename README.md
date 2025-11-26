# Portfolio

My Personal portfolio website as a Frontend & UI/UX Developer with fullstack experience. This project showcases my work, tech stack and background in a clean, product-style layout focused on usability and visual clarity.

> Built with **React + TypeScript + Vite** and **styled-components**, following a component-based architecture and UI/UX best practices.

---

## ✨ Features

- Modern, responsive layout optimized for desktop and mobile
- Clear positioning: **Frontend & UI/UX Developer | Fullstack Experience**
- Dedicated sections for:
  - Hero / introduction
  - About
  - Skills
  - Selected projects
  - Professional experience
  - Contact
- Reusable UI building blocks:
  - Layout + Navbar components
  - Section wrapper component
  - Project card component
- Theming with `styled-components` and a central `theme.ts`
- Smooth anchor navigation between sections

---

## 🛠 Tech Stack

**Frontend**

- React
- TypeScript
- Vite

**Styling**

- styled-components
- GlobalStyle + theme-based design tokens

**Architecture**

- Component folders: `ComponentName/index.tsx` + `styles.ts`
- Sections split into reusable building blocks (`Section`, `ProjectCard`, etc.)
- Data separated into `data/projects.ts` and `data/experience.ts`

---

## 📁 Project Structure

```text
src/
  assets/
    profile-main.jpg        # main profile photo used in the Hero section

  components/
    layout/
      Layout/
        index.tsx
        styles.ts
      Navbar/
        index.tsx
        styles.ts

    common/
      Section/
        index.tsx
        styles.ts
      ProjectCard/
        index.tsx
        styles.ts

    sections/
      Hero/
        index.tsx
        styles.ts
      About/
        index.tsx
        styles.ts
      Skills/
        index.tsx
        styles.ts
      Projects/
        index.tsx
        styles.ts
      Experience/
        index.tsx
        styles.ts
      Contact/
        index.tsx
        styles.ts

  data/
    projects.ts
    experience.ts

  styles/
    theme.ts
    GlobalStyle.ts

  App.tsx
  main.tsx
