# STUDIO_GRID — Digital Agency Landing Page

A premium dark-mode landing page for a digital agency, built with **Astro**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

| Tool | Role |
|------|------|
| **Astro 4** | SSG framework with islands architecture |
| **Tailwind CSS 3** | Utility-first styling with custom design tokens |
| **Framer Motion 11** | Scroll-triggered animations, parallax, accordion |
| **React 18** | Component islands for interactive sections |
| **TypeScript** | Type safety across all components |

## Project Structure

```
studio-grid/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with scroll-aware blur
│   │   ├── Hero.tsx         # Parallax hero with staggered text reveal
│   │   ├── Partners.tsx     # Infinite marquee ticker
│   │   ├── About.tsx        # Word-by-word scroll animation
│   │   ├── Services.tsx     # Hover-expand accordion with image preview
│   │   ├── FAQ.tsx          # Animated accordion expand/collapse
│   │   ├── Contact.tsx      # CTA section with gradient headline
│   │   └── Footer.tsx       # Footer with hover micro-interactions
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML shell
│   ├── pages/
│   │   └── index.astro      # Main page composing all sections
│   └── styles/
│       └── global.css       # Tailwind directives + base styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

Colors, typography, and spacing are defined as Tailwind tokens in `tailwind.config.mjs`, mirroring the original Material-You dark theme:

- **Primary**: `#ffffff` (white)
- **Secondary**: `#e9c176` (gold accent)
- **Background**: `#121414` (near-black)
- **Surface**: various dark grays
- **Fonts**: Syne (display) · Hanken Grotesk (body) · Space Grotesk (labels)

## Animation Features

- **Navbar**: Slide-in from top, per-link stagger, scroll-aware background blur
- **Hero**: Parallax background, headline slide-up, word stagger
- **Partners**: CSS `translateX` marquee via Framer Motion `animate`
- **About**: Word-by-word reveal triggered by scroll intersection
- **Services**: Hover-expand with `AnimatePresence` image entry/exit
- **FAQ**: Height-animated accordion with icon rotation
- **Contact**: Viewport-triggered headline reveal + CTA pulse
