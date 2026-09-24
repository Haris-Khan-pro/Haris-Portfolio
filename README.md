<div align="center">

# Haris Khan — Portfolio

### Full-Stack Developer · BSCS Graduate · Pakistan

*Building complete web applications — frontend to backend — and cross-platform mobile apps*

<br/>

<!-- [![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) -->

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-4B7FFF?style=for-the-badge)](https://haris-portfolio-gilt.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Haris--Khan--pro-181717?style=for-the-badge&logo=github)](https://github.com/Haris-Khan-pro)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mharis-khan/)

<br/>

---

</div>

## ✦ Overview

Personal developer portfolio built from scratch — no templates, no themes. Features a **3D interactive hero scene** powered by React Three Fiber, **scroll-driven entrance animations** with GSAP, and a dark design system with Space Grotesk typography and a deep navy/blue accent palette.

Every section is purpose-built: the tech stack reflects real projects, the journey timeline is evidence-based, and the contact form is wired to EmailJS.

<br/>

## ✦ Sections

| Section | Description |
|---|---|
| **Hero** | 3D background scene (Three.js + R3F), GSAP staggered text reveal, live availability badge |
| **About** | Background, education (BSCS · University of Haripur · 2026), location |
| **Currently Building** | Live status — ongoing projects, active learning, next goals |
| **Projects** | Tier 1 featured cards (Hike Planner, Talkify, Dishly) + Tier 2 additional grid |
| **Skills** | Categorised tech stack with `strong / working / learning` proficiency levels |
| **Journey** | Development timeline from 2022 → 2026 |
| **GitHub CTA** | Profile link with contribution context |
| **Contact** | EmailJS-powered contact form with validation |

<br/>

## ✦ Tech Stack

```
Frontend        React 19 · Vite 6 · Tailwind CSS v4
3D              Three.js · React Three Fiber · Drei · Postprocessing
Animation       GSAP · @gsap/react
Email           EmailJS (@emailjs/browser)
Typography      Space Grotesk · Inter · JetBrains Mono
Deployment      Vercel 
```

<br/>

## ✦ Featured Projects

<details>
<summary><b>🥾 Hike Planner</b> — AI-Assisted Mobile App · University FYP</summary>

<br/>

An AI-powered mobile application for planning and navigating hiking trails across Pakistan. Built as a University Final Year Project with a team of 2 over one academic year.

**Stack:** `React Native` `Expo` `FastAPI` `MongoDB Atlas` `LangChain` `Groq/LLaMA` `DistilBERT` `Google Maps API` `OpenWeatherMap API` `Clerk`

**Architecture:**
```
React Native / Expo  ↔  FastAPI (REST)  ↔  MongoDB Atlas
                              ↕
             LangChain / Groq pipeline (AI trip planning)
             DistilBERT (trail sentiment analysis)
             Google Maps API + OpenWeatherMap API
```

→ [GitHub](https://github.com/aazibali526-arch/hikeplanner)

</details>

<details>
<summary><b>💬 Talkify</b> — Real-Time Chat Application · Full-Stack</summary>

<br/>

A full-stack MERN chat application with real-time bidirectional messaging, user authentication, image sharing, and online presence indicators.

**Stack:** `React` `Node.js` `Express.js` `Socket.IO` `MongoDB` `Clerk` `ImageKit`

**Architecture:**
```
React (frontend)  ↔  Node.js / Express + Socket.IO  ↔  MongoDB
                              +
                   Clerk (auth) · ImageKit (media CDN)
```

</details>

<details>
<summary><b>🍽️ Dishly</b> — Restaurant Landing Page · Frontend · Live</summary>

<br/>

A premium restaurant landing page focused on animation quality and frontend implementation craft. Fully responsive with scroll-driven entrance animations and smooth Lenis scrolling.

**Stack:** `React 19` `Vite` `Tailwind CSS v4` `Motion (Framer Motion v13)` `Lenis` `Lucide React`

→ [GitHub](https://github.com/Haris-Khan-pro/Dishly) · [Live Demo](https://dishly-one.vercel.app/)

</details>

<br/>

## ✦ Project Structure

```
haris-portfolio/
├── public/
│   ├── images/          # Profile image and static assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── 3d/          # HeroScene — Three.js / React Three Fiber
│   │   ├── layout/      # Navbar, Footer
│   │   └── ui/          # Badge, Button, SectionTitle
│   ├── data/            # ← All personal content lives here
│   │   ├── site.js      # Name, title, links, current status
│   │   ├── projects.js  # Featured + additional projects
│   │   ├── skills.js    # Tech stack with proficiency levels
│   │   └── journey.js   # Development timeline
│   ├── hooks/
│   │   ├── useInView.js          # Scroll-triggered visibility
│   │   └── useReducedMotion.js   # Accessibility — respects OS motion preference
│   ├── sections/        # All page sections as individual components
│   ├── utils/
│   │   └── cn.js        # Conditional classnames utility
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Design tokens + global styles
├── index.html
├── vite.config.js
└── package.json
```

<br/>

## ✦ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Clone and Install

```bash
git clone https://github.com/Haris-Khan-pro/Haris-Portfolio.git
cd Haris-Portfolio
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Open `.env` and fill in your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://www.emailjs.com/) → your dashboard.

### Run Locally

```bash
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

<br/>

## ✦ Customisation

All personal content is centralised in `src/data/` — no hunting through components.

**`site.js`** — Update name, title, tagline, email, social links, current status, education
```js
export const site = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  links: { github: '', linkedin: '' },
  currentlyBuilding: { project: '', learning: [], next: '' },
}
```

**`projects.js`** — Add/remove projects. Tier 1 = featured cards, Tier 2 = smaller grid

**`skills.js`** — Update categories and set levels: `'strong' | 'working' | 'learning'`

**`journey.js`** — Add/edit timeline entries with year, title, description, tags

<br/>



<br/>

## ✦ Design System

| Token | Value |
|---|---|
| Background | `#07070E` |
| Surface | `#0F0F1A` |
| Accent | `#4B7FFF` |
| Text Primary | `#E8E8F2` |
| Text Secondary | `#9090B4` |
| Display Font | Space Grotesk |
| Body Font | Inter |
| Mono Font | JetBrains Mono |

<br/>

---

<div align="center">

**Haris Khan** · Full-Stack Developer · Pakistan

[hariskhan01.gsm@gmail.com](mailto:hariskhan01.gsm@gmail.com) · [LinkedIn](https://www.linkedin.com/in/mharis-khan/) · [GitHub](https://github.com/Haris-Khan-pro)

*Open to full-time and freelance opportunities worldwide — including remote*

</div>
