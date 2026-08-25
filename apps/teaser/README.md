# HBX-Forge Teaser Section

Drop-in section for `hoopzblends.store` (main site).

## Files
- `forge-section.html` — the new `<section id="forge">...</section>` to add
- `forge-styles.css` — CSS to add to your existing `main.css`
- `nav-update.html` — replacement nav links (add "Forge")
- `forge-script.js` — JS for live status animation

## How to add to your site

1. Open your Netlify site's HTML file
2. Add `forge-styles.css` content into the existing `<style>` block or your main.css
3. Add `forge-section.html` content right after the existing `</section>` for `os-section`
4. Update the nav links to include `<a href="#forge">Forge</a>` (before "HBX OS" or after)
5. Add `forge-script.js` before `</body>`
6. Deploy to Netlify (drag-drop or push to GitHub)

Or, if you want, give me GitHub access to your hoopzblends.store repo and I'll do the PR.
