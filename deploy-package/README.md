# hoopzblends.store v2 — With HBX-Forge Section

## What's in this package
- `index.html` — your full site with the Forge section injected, ready to deploy
- `forge-section-snippet.html` — just the Forge section HTML (if you want to paste it manually)
- `forge-styles.css` — just the Forge CSS
- `forge-script.js` — just the Forge JS

## How to deploy to Netlify (3 ways)

### Way 1 — Drag & drop (FASTEST, 30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag this entire folder (`deploy-package/`) onto the page
3. Done. You'll get a temporary URL.
4. To point hoopzblends.store to it: Netlify dashboard → site → Domain settings → Add custom domain → hoopzblends.store

### Way 2 — Netlify dashboard (if site already exists)
1. Go to https://app.netlify.com
2. Select your hoopzblends.store site
3. Go to "Deploys" tab
4. Drag the `index.html` file onto the deploy area (it will replace the current site)

### Way 3 — Netlify CLI (advanced)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=deploy-package
```

## What changed in your site

1. **NEW SECTION** after HBX OS section: full Forge teaser with:
   - "HBX // FORGE" hero title with cyan→magenta gradient
   - Live status badge (SYSTEM ONLINE · updates every second)
   - 4 animated stat counters (CORE SYSTEMS, COUNTRY PILOT, INCIDENTS, COUNTRIES PLANNED)
   - 8 system cards (HBX-Identity through HBX-Health) with phase + status
   - "ENTER THE FORGE" CTA → /forge (the dashboard)
   - "VIEW ON GITHUB" CTA → github.com/HoopzBlends-AI/HBX-Forge
   - Animated scan line + grid background
2. **DESKTOP NAV**: added "Forge" link
3. **MOBILE NAV**: added "⚡ Forge" link at top of menu
4. **STYLES**: Forge CSS injected inline (won't conflict with your existing main.css)
5. **SCRIPT**: Forge JS injected for stat animation + live time badge

## What it looks like

The Forge section appears between "HBX OS" and "Signals" in your scroll order. Matches your site's dark futuristic aesthetic exactly — same fonts (Orbitron + Rajdhani + Space Mono), same color palette (cyan #00f0ff + magenta #ff00aa), same particle/grid background style.

## Verification

After deploy, check:
- Scroll to the section after "HBX OS"
- See "HBX // FORGE" with gradient title
- Stats should count up (13, 1, 0, ∞)
- Click "ENTER THE FORGE" → goes to hoopzblends.store/forge (when dashboard is deployed there)
- "Forge" link in nav works
- Mobile menu shows "⚡ Forge"

## Need help?

The Forge section is standalone — if anything breaks, the original site still works because we only added new elements, never modified existing ones.
