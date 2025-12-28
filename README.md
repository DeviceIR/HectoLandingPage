# Hecto Landing (standalone)

This is the extracted `src/pages/LandingPage` from the main LMS, packaged as a minimal Vite + React app ready for static hosting (e.g., Vercel).

## What’s included
- React + Vite setup with alias `@` pointing to `src`.
- Landing page components, styles, fonts, and vendor scripts (AOS, Bootstrap, bootstrap-icons, lottie).
- Contact form currently logs to console (`src/pages/LandingPage/utils/contactFormHandler.js`); wire it to your API if needed.

## Quick start
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview
```

## Deploy to Vercel
1) Push this folder to a new repo (or set the project root to `landing-page-vercel` in Vercel import).
2) Vercel settings:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
3) Deploy. No runtime backend is required; all assets are static. If you add an API for the contact form, expose its URL via env vars and call it from `submitContactForm`.

## Notes
- Router links point to `/login`; adjust to your auth URL as needed.
- Static assets live under `src/pages/LandingPage/assets`. Styles are imported within `src/pages/LandingPage/index.jsx`.


