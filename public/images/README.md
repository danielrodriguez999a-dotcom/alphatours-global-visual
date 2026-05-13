# /public/images

Drop production photography in this folder with these filenames. The site
will automatically use them once you flip the resolver in
`src/lib/imagery.ts` from `imgSrc(img) => img.remote` to `imgSrc(img) => img.local`.

Until that flip, the site uses curated Unsplash photographs as visual
placeholders so the build is fully usable on day one.

Expected files (luxury hospitality / Bogotá / Colombia):

- hero-bogota.jpg          — full-bleed homepage hero
- tables-bogota.jpg        — chef's table imagery
- cocktail-hours.jpg       — bar / mixology
- coffee-sessions.jpg      — coffee culture
- executive-concierge.jpg  — executive arrival
- hidden-bogota.jpg        — neighborhoods
- luxury-escapes.jpg       — Andean light
- curated-colombia.jpg     — colonial / Caribbean
- concierge.jpg            — concierge / hospitality
- notebook-1.jpg           — chef portrait
- notebook-2.jpg           — dining room
- notebook-3.jpg           — Bogotá street

Recommended specs:

- 2400 × 1600 px minimum
- JPEG, sRGB
- 80–90 quality
- color-graded with warm emerald undertones if possible
