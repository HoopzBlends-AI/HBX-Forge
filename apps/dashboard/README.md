# 🔥 HBX-Forge — Netlify Deploy

This is the dashboard that lives at `hoopzblends.store/forge`.

## Setup
1. Connect this repo to Netlify (or import the `apps/dashboard` subdirectory as the base)
2. Build command: `cd apps/dashboard && npm install && npm run build`
3. Publish directory: `apps/dashboard/out`
4. Add `_redirects` rule to map `/forge/*` → this site

## Local development
```bash
cd apps/dashboard
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy manually
```bash
cd apps/dashboard
npm install
npm run build
netlify deploy --prod --dir=out
```
