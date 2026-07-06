# Syeda Shereen Zehra — Portfolio (React + Three.js)

A dark, futuristic, animated portfolio built with React 19, Vite, Tailwind CSS v4,
Framer Motion, Three.js / React Three Fiber, Lenis smooth scroll, and React Icons.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The production build outputs to `dist/`, ready to deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## What's included

- **Hero** — full-screen intro with a typing headline, a live Three.js scene
  (particle field + floating distorted glass shapes that react to your mouse),
  a floating glass profile card, and Hire Me / Download CV buttons.
- **Navbar** — floating glass pill nav with a sliding active-section indicator
  and a mobile menu.
- **About** — bio + animated count-up stats.
- **Skills** — category filters, tilt-on-hover cards, animated progress bars,
  and circular progress rings.
- **Experience** — animated vertical timeline (internship + education).
- **Projects** — tilt cards for all real GitHub projects, tags, and code links.
- **Services** — three cards on what Shereen can help with.
- **Testimonials** — auto-sliding carousel with manual controls.
- **Contact** — floating-label form with validation; submitting opens a
  pre-filled email to shreenzehra098@gmail.com (there's no backend wired up,
  so this is the honest, working fallback rather than a fake "sent!" message).
- **Global background** — animated grid, aurora gradient orbs, a canvas star
  field, and a mouse-reactive spotlight, all running behind every section.
- **Custom cursor** with magnetic buttons and a ripple click effect (desktop
  only — falls back to the normal cursor on touch devices).

## Honest notes on scope

A couple of items from the original brief were intentionally left out or
simplified rather than faked:

- **Certificates** — Shereen's original site didn't list any certificates,
  so no certificate section was added. Fabricating fake credential images
  would be misleading. Send the real ones and a proper section can be added.
- **Live demo links** — most projects are code projects (console apps, C++
  systems) without a hosted demo, so only GitHub links are shown where a
  live demo doesn't exist.
- The heavy 3D scene is lazy-loaded and confined to the Hero section (not
  the whole page) to keep scroll performance smooth on lower-end laptops
  and phones — a page-wide heavy 3D scene is the most common way a "cool"
  portfolio ends up janky.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, GlobalBackground, CustomCursor
    sections/   Hero, About, Skills, Experience, Projects, Services,
                Testimonials, Contact
    three/      HeroScene, ParticleField, FloatingShapes
    ui/         MagneticButton, SectionHeading, TiltCard
  constants/    data.js — all real content lives here
  hooks/        useLenis, useMousePosition, useActiveSection
  utils/        cn.js
```

To update content (bio, projects, skills, contact info), edit
`src/constants/data.js` — nothing else needs to change.
