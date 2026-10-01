# Hari Krishna Joshi — Academic & Research Site

[![Deploy Next.js site to Pages](https://github.com/harijoshi07/academic/actions/workflows/pages.yml/badge.svg)](https://github.com/harijoshi07/academic/actions/workflows/pages.yml)
[![Site](https://img.shields.io/badge/Live%20Site-harijoshi07.github.io%2Facademic-0969da?style=flat&logo=githubpages&logoColor=white)](https://harijoshi07.github.io/academic/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Academic and research portfolio for **Hari Krishna Joshi**, focusing on vision-based autonomous robotics, embedded perception, real-time spatial computing, and mobile systems under strict computational constraints.

> **Live Website:** [https://harijoshi07.github.io/academic/](https://harijoshi07.github.io/academic/)  
> **Main Portal:** [harijoshi07.github.io](https://harijoshi07.github.io/)  
> **Engineering Portfolio:** [harijoshi07.github.io/portfolio/](https://harijoshi07.github.io/portfolio/)

---

## 🔬 Research Focus & Themes

This site presents research investigations, systems engineering projects, and academic records centered on a core question:

> *How can autonomous agents and mobile platforms perform reliable perception, localization, and navigation under severe hardware and computational constraints?*

- **Autonomous Aerial Robotics:** Vision-based obstacle avoidance using onboard RGB-D depth perception (Intel RealSense D435), edge object detection (YOLOv8 quantized via ONNX/TFLite), 3D voxel mapping, and RRT* trajectory planning with ROS on companion computers (Raspberry Pi 4B) interfacing with Pixhawk flight controllers.
- **Embedded Telemetry & Edge IoT:** Microcontroller sensor streaming (Arduino, SIM800L GPS/GSM), asynchronous time-series ingestion over WebSockets, and deep neural network (DNN) arrival time prediction.
- **High-Performance Spatial Systems:** Thread isolation, coroutine lifecycle management, and memory-bounded offline vector tile caching for real-time mobile mapping engines (MapLibre SDK, Android).

---

## 📁 Repository Structure

```text
academic/
├── app/
│   ├── about/            # Academic bio, research philosophy & education timeline
│   ├── cv/               # Web curriculum vitae & synchronized PDF download
│   ├── notes/            # Research logs, reading notes, and technical writeups
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

---

## 🎨 Design Philosophy & Features

- **Typography-Driven Editorial Aesthetic:** Clean, scholarly presentation utilizing *Cormorant Garamond* for display headings, *Inter* for legible body reading, and *IBM Plex Mono* for systems metadata and technical metrics.
- **Single Source of Truth (`content.ts`):** All publications, research investigations, project logs, and biographical entries are declared in strongly-typed TypeScript records for straightforward updates.
- **Dual-Mode Theming:** Seamless dark and light themes with system preference detection and manual toggle via `next-themes`.
- **Zero-Client-Server Dependency:** Fully pre-rendered static HTML (`output: 'export'`) optimized for low-latency delivery over GitHub Pages CDN.
- **Academic Schema & Semantic SEO:** Embedded OpenGraph tags and Schema.org `Person` JSON-LD microdata for academic search indexing.

---

## 🛠️ Local Development

### Prerequisites

- **Node.js**: v18.17.0+ or v20.x
- **npm**: v9.x+

### Setup

```bash
# Clone the repository
git clone git@github.com:harijoshi07/academic.git
cd academic

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/academic](http://localhost:3000/academic) in your browser.

> **Note:** The `basePath: '/academic'` setting is active during local development to mirror the production subpath structure.

### Production Build & Static Export

```bash
npm run build
```

This compiles TypeScript, executes Next.js static generation, and outputs pre-rendered static HTML/CSS/JS artifacts directly into `./out`.

---

## 🚀 Deployment Pipeline

Deployments to GitHub Pages are managed via **GitHub Actions** (`.github/workflows/pages.yml`):

1. **Trigger:** Automatically invoked on every push to the `main` branch or manually via `workflow_dispatch`.
2. **Build Job:** Checks out the repo, sets up Node.js 20 with npm caching, runs `npm ci` and `npm run build`, and stages `./out` as a GitHub Pages artifact.
3. **Deploy Job:** Deploys the artifact to GitHub Pages with zero downtime.

### Required Repository Setting

Under **Settings** → **Pages** → **Build and deployment**:
- **Source**: Select **GitHub Actions**.

---

## 📬 Contact & Links

- **Author:** Hari Krishna Joshi
- **Email:** [harijoshi07x@gmail.com](mailto:harijoshi07x@gmail.com)
- **GitHub:** [@harijoshi07](https://github.com/harijoshi07)
- **LinkedIn:** [harijoshi07](https://linkedin.com/in/harijoshi07)
- **X / Twitter:** [@sometimesIcode_](https://x.com/sometimesIcode_)
- **Base Site:** [harijoshi07.github.io](https://harijoshi07.github.io)
