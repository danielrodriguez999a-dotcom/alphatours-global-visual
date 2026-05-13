# ALPHA TOURS — Deploy in 3 commands

## 1. Local build check
```
npm install && npm run build
```

## 2. Push to GitHub
```
git init && git add . && git commit -m "Alpha Tours luxury MVP" && git branch -M main && git remote add origin git@github.com:<your-handle>/alpha-tours.git && git push -u origin main
```

## 3. Deploy to Vercel
```
npx vercel --prod
```

---

## Vercel Dashboard Settings

| Setting          | Value          |
| ---------------- | -------------- |
| Framework Preset | Next.js        |
| Root Directory   | `./`           |
| Build Command    | `next build`   |
| Install Command  | `npm install`  |
| Output Directory | `.next`        |
| Node Version     | 20.x           |
| Env Variables    | none required  |

## Subdomain Setup

Production:  `alphatoursbogota.com`
Staging:     `staging.alphatoursbogota.com`
Partners:    `partners.alphatoursbogota.com` (optional CNAME → same Vercel project)

Point apex + www at Vercel via DNS:
- `A` record  → `76.76.21.21`
- `CNAME www` → `cname.vercel-dns.com`
