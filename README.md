# Hari Joshi — Academic & Research Site

[![Deploy Next.js site to Pages](https://github.com/harijoshi07/academic/actions/workflows/pages.yml/badge.svg)](https://github.com/harijoshi07/academic/actions/workflows/pages.yml)
[![Site](https://img.shields.io/badge/Live%20Site-harijoshi07.github.io%2Facademic-0969da?style=flat&logo=githubpages&logoColor=white)](https://harijoshi07.github.io/academic/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Academic and research portfolio for **Hari Joshi**, focusing on vision-based autonomous robotics, embedded perception, real-time spatial computing, and mobile systems under strict computational constraints.

> **Live Website:** [https://harijoshi07.github.io/academic/](https://harijoshi07.github.io/academic/)  
> **Engineering Portfolio:** [harijoshi07.github.io/portfolio/](https://harijoshi07.github.io/portfolio/)

---

## 🔬 Research Focus & Themes

This site presents research investigations, systems engineering projects, and academic records centered on a core question:

> *How can small robots and mobile devices perceive their surroundings and use live sensor data reliably when compute is limited and network links drop?*

- **Autonomous aerial robotics:** onboard obstacle detection (YOLOv8 quantized through ONNX and TFLite, Intel RealSense D435 depth), occupancy mapping and RRT* planning on a Raspberry Pi 4B, with commands to a Pixhawk 4X.
- **Embedded telemetry:** an Arduino Mega tracker (NEO-6M GPS, SIM900 GSM), a Django and Leaflet map, and a feedforward network that estimates bus arrival times.
- **Production mobile systems:** MapLibre-based navigation, location tracking and client hardening in production Android apps.

---

## 📁 Repository Structure

```text
academic/
├── app/
│   ├── about/            # Academic bio, research philosophy & education timeline
│   ├── cv/               # Web curriculum vitae & synchronized PDF download
│   ├── notes/            # Research logs, reading notes, and technical writeups (planned)
│   ├── research/         # Active questions, methodologies, and investigations
│   ├── software/         # Systems projects, open-source code & tooling
│   ├── globals.css       # Typography, color system, and layout styles
│   ├── layout.tsx        # Shell layout, semantic JSON-LD, SEO, nav & footer
│   ├── page.tsx          # Hero thesis statement, active research, and highlights
│   ├── providers.tsx     # Theme provider (light/dark mode)
│   └── theme-toggle.tsx  # Accessible client-side theme switcher
├── public/
│   └── cv.pdf            # Synchronized curriculum vitae artifact
├── .github/
│   └── workflows/
│       └── pages.yml     # Automated Next.js static build & GitHub Pages deployment
├── content.ts            # Single-source-of-truth data store for all site content
├── cv.tex                # Canonical LaTeX curriculum vitae
├── next.config.mjs       # Static export ('export') & basePath ('/academic')
├── package.json          # Project metadata and dependencies
└── tailwind.config.ts    # Design tokens and responsive utility configuration
```

CV source: `cv.tex`; the PDF is `public/cv.pdf`.

---

## 🛠️ Design & Features

- **Typography-Driven Editorial Aesthetic:** Clean presentation utilizing *Cormorant Garamond* for display headings, *Inter* for body reading, and *IBM Plex Mono* for systems metadata and technical metrics.
- **Single Source of Truth (`content.ts`):** All research investigations, project logs, and biographical entries are declared in strongly-typed TypeScript records.
- **Dual-Mode Theming:** Dark and light themes with system preference detection and manual toggle via `next-themes`.
- **Static Export:** Static site built with Next.js (`output: 'export'`), deployed to GitHub Pages.

---

## ⚙️ Local Development

### Prerequisites

- Node.js 18+ or 20+ LTS
- npm or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harijoshi07/academic.git
cd academic

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000/academic](http://localhost:3000/academic) in your browser.

---

## 📄 License & Attribution

- **Source Code:** MIT License
- **Content & Text:** © 2024–2026 Hari Joshi. All rights reserved.
