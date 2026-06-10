# 🚀 Alimaaz Akhter — Professional Data Science, AI/ML and Web Dev Portfolio

Welcome to the repository of my professional portfolio website. Designed as a high-performance Single Page Application (SPA), this platform serves as the central hub for my freelancing services, showcasing production-grade projects across machine learning, AI automation, and full-stack web applications.

---

## 🎯 Key Design Features & Aesthetics

- **Premium Glassmorphic UI:** Sleek, modern card layouts utilizing conditional HSL color schemes matching the category of each project.
- **Dynamic Projects Grid:** Fully interactive project filtering system supporting instant category switching (All, ML, AI, Data, Web) and live counts.
- **Interactive Pipeline Telemetry:** Deep dive screens for complex projects showing visual workflow nodes (e.g., `[Raw Inputs] ➔ [AI Extraction] ➔ [Template Fill]`).
- **Rich Media Assets:** Embedded video demonstrations, high-resolution screenshots, and liveNetlify/Vercel/Render links for immediate validation.
- **Smooth Animations & Micro-Interactions:** Fully responsive layout with custom scroll reveal observers, dynamic cursor glows, and gradient ambient animations.
- **Dark/Light Mode:** Seamless, high-fidelity system-preferred theme switching.

---

## 💻 Tech Stack & Frameworks

### Core Engine
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Serverless architecture)
- **Library:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) for complete type safety
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables for ultimate layout flexibility

### Key Dependencies
- **Data Model:** Clean, structured JSON-like TypeScript configurations managing project timelines, tags, descriptions, and assets.
- **Icons:** Lucide React for modern, unified iconography.

---

## 🛠️ Local Development & Running Locally

To run this portfolio website on your local machine, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher is recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/alimaazakhter/alimaaz-portfolio.git
cd alimaaz-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio live.

### 5. Build for Production
To generate a fully optimized static build:
```bash
npm run build
npm run start
```

---

## 📂 Project Organization

```text
portfolio-nextjs/
├── app/                  # Next.js App Router directories
│   ├── components/       # Reusable components (Navbar, Footer, ProjectDetailView)
│   ├── projects/         # Dynamic projects list and slug views ([id]/page.tsx)
│   ├── layout.tsx        # Global theme providers and navigation
│   └── page.tsx          # Homepage with counts, service highlights, and intro
├── lib/
│   └── data.ts           # Unified data schemas and project metadata
├── public/
│   ├── Thumbnails/       # High-resolution screenshots of the deployed projects
│   └── *.mp4             # Compressed video demos for project dashboards
├── package.json          # Dependency management and build scripts
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 📩 Let's Connect
Feel free to explore my portfolio and reach out for collaborations or freelance inquiries!

- **GitHub:** [alimaazakhter](https://github.com/alimaazakhter)
- **Live Site:** [alimaaz-portfolio.vercel.app](https://alimaaz-portfolio.vercel.app/) (Subdomain live link)
