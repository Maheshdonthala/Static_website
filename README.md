Sri Modhakondamma Madugula Halwa Website

Structure created as a minimal Next.js App Router + Tailwind starter.

Files/directories created:
- app/
  - about/page.js
  - contact/page.js
  - products/page.js
  - globals.css
  - layout.js
  - page.js (home)
- components/
  - Footer.js
  - Navbar.js
  - ProductCard.js
  - WhatsAppButton.js
- public/
  - halva-hero.jpg (placeholder)
  - product-halva-1.jpg (placeholder)
  - product-halva-2.jpg (placeholder)
- tailwind.config.js

Next steps to run locally (recommended):
1. From this folder run:
   npm init -y
   npm install next react react-dom tailwindcss postcss autoprefixer
   npx tailwindcss init -p
2. Update package.json scripts:
   "dev": "next dev",
   "build": "next build",
   "start": "next start"
3. Start dev server:
   npm run dev

Replace the placeholder files in `public/` with real images.
