# Haris Khan — Personal Portfolio

Built with React 19, Vite, Three.js, React Three Fiber, GSAP, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Configuration

### EmailJS (Contact Form)
1. Copy `.env.example` to `.env`
2. Create a free account at [emailjs.com](https://www.emailjs.com/)
3. Fill in your Service ID, Template ID, and Public Key

Without EmailJS configured, the form still works — it simulates success in development.

### Profile Photo
Open `src/sections/About.jsx` and find the `PROFILE PHOTO PLACEHOLDER` comment.
Replace the placeholder `<div>` with:
```jsx
<img
  src="/images/haris-profile.jpg"
  alt="Haris Khan"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```
Place your photo at `public/images/haris-profile.jpg`.

### Updating Content
All content lives in `src/data/`:

| File | What it controls |
|------|-----------------|
| `site.js` | Name, email, links, currently building |
| `projects.js` | All projects — featured and additional |
| `skills.js` | Skill groups and levels |
| `journey.js` | Development timeline |

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## Tech Stack

- **React 19** + **Vite 6**
- **Three.js** + **React Three Fiber** + **Drei** — 3D hero scene
- **GSAP** — hero entrance animations
- **Tailwind CSS v4**
- **EmailJS** — contact form (no backend needed)
