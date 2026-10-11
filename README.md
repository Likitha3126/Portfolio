# Likitha | AI/ML Developer Portfolio

A production-quality developer portfolio built for a computer science student exploring Artificial Intelligence, Machine Learning, Python systems, Data Structures & Algorithms, and open-source software.

Designed with a futuristic editorial dark aesthetic, cohesive interactive neural network canvas, explainable project visual artworks, and strict privacy adherence.

---

## 🌟 Key Features

- **Futuristic Editorial Aesthetic:**
  - Dark theme palette (`#09090B` base, `#111116` secondary surface, `#8B5CF6` violet accent, `#22D3EE` cyan accent).
  - Clean typography using *Inter* and *JetBrains Mono*.
  - Subtle grid backgrounds, restrained glows, and smooth spring-based microinteractions.
- **Interactive Neural Network Canvas:** Custom HTML5 Canvas rendering interactive floating nodes, gradient synapses, and pointer-responsive movement.
- **Projects Showcase & Interactive Artwork:**
  - **SlopFilter:** Browser extension heuristic evaluation HUD with interactive filter simulation.
  - **Document Q&A with RAG:** ChromaDB vector similarity space & local Ollama inference pipeline visualizer.
  - **NavDR:** Vehicle dead-reckoning sensor fusion & Random Forest regressor telemetry charts.
  - **KrishiCopilot:** AgriTech conversational advisory terminal with grounded RAG context preview.
- **Authentic Technical Skills Matrix:** Grouped into Programming, AI & Machine Learning, Development, and Tools with real-world architectural context—no arbitrary percentage meters.
- **Verified Open Source Showcase:** Direct verified links to public GitHub repositories (`https://github.com/Likitha3126`) and GitHub activity matrix.
- **Growth Roadmap (Learning):** Current active focus areas including ML fundamentals, algorithmic problem solving, Python concurrency, and GATE / GSoC preparation.
- **Strict Privacy Compliance:**
  - Single public profile link: GitHub ([https://github.com/Likitha3126](https://github.com/Likitha3126)).
  - No LinkedIn, email address, phone number, address, or résumé/CV downloads.
  - Zero fabricated metrics, fake work experience, or invented credentials.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Likitha3126/Likitha3126.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
# Type-check and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in the `dist/` directory.

---

## 🌐 Custom `.tech` Domain & Deployment Guide

This portfolio is configured for deployment to modern static hosting platforms and ready to connect to a custom `.tech` domain (e.g., `likitha.tech`).

### 1. Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

#### Connecting Your Custom `.tech` Domain on Vercel:
1. In your Vercel project dashboard, navigate to **Settings > Domains**.
2. Enter your custom domain (e.g., `yourdomain.tech` or `www.yourdomain.tech`) and click **Add**.
3. Configure DNS records at your domain registrar (Namecheap, GoDaddy, Google Domains, etc.):
   - **For Apex Domain (`yourdomain.tech`):**
     - Type: `A`
     - Name / Host: `@`
     - Value: `76.76.21.21`
   - **For Subdomain / WWW (`www.yourdomain.tech`):**
     - Type: `CNAME`
     - Name / Host: `www`
     - Value: `cname.vercel-dns.com`
4. **HTTPS Verification:** Vercel will automatically provision a free Let's Encrypt SSL certificate once DNS records propagate (typically 5–30 minutes).

---

### 2. Deploying to Netlify

1. Push your repository to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and click **Add new site > Import an existing project**.
3. Connect your GitHub repository.
4. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy Site**.

#### Connecting Your Custom `.tech` Domain on Netlify:
1. In Netlify, go to **Site configuration > Domain management > Custom domains**.
2. Click **Add a domain** and input your `.tech` domain.
3. In your registrar DNS management, add:
   - **Apex (`@`):** `A` record pointing to `75.2.60.5`
   - **Subdomain (`www`):** `CNAME` record pointing to `<your-site-name>.netlify.app`
4. Scroll to **HTTPS** on Netlify and click **Verify DNS configuration** to provision your SSL certificate.

---

### 3. Deploying to GitHub Pages

1. In `vite.config.ts`, if deploying to a subpath repository:
   ```ts
   export default defineConfig({
     base: '/', // or '/repo-name/' for GitHub project pages
     plugins: [react()],
   });
   ```
2. In your GitHub repository:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Add a standard Vite GitHub Pages workflow (`.github/workflows/deploy.yml`).
3. For custom `.tech` domain on GitHub Pages:
   - In **Settings > Pages > Custom domain**, enter `yourdomain.tech`.
   - Configure DNS:
     - 4 `A` records for `@`:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - `CNAME` for `www`: `<your-username>.github.io`
   - Check **Enforce HTTPS**.

---

## ⚙️ Configuration

All content, projects, skills, roadmap items, and GitHub URLs are centralized in a single configuration file:
- `src/config/portfolio.ts`

To update projects, add new repositories, or tweak descriptions, modify `PORTFOLIO_CONFIG` directly.

---

## 🔒 Privacy & Architecture Notes

- Only verified public profile link is GitHub (`https://github.com/Likitha3126`).
- No personal contact details, emails, or phone numbers are exposed.
- All project links point directly to public repositories on GitHub.

Designed with curiosity. Built with code.
