# Cloudflare Deployment

The site is fully static (`output: "static"`), so it runs on Cloudflare's free tier with no server code.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repository root) |
| Node version | Set env var `NODE_VERSION` = `22` (or newer LTS) if the default build image is older |

> Cloudflare also offers "Workers with static assets" for new projects. Pages with Git integration still supports this exact setup and gives the `*.pages.dev` address, so it is used here. Before deploying, glance at https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ in case the dashboard steps have changed.

## 1. Push the code to GitHub

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-account>/nextgen-it-solutions.git
git push -u origin main
```

## 2. Create the Pages project (Git integration — auto-deploys on every push)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub and pick the repository.
3. **Project name:** `nextgenitsolutions` → this becomes `https://nextgenitsolutions.pages.dev`.
   *If the name is taken, Cloudflare tells you here (or appends a random suffix). Availability can only be confirmed at this step. If you get a different address, update `site` in `astro.config.mjs`, `url` in `src/config/site.ts` and the `Sitemap:` line in `public/robots.txt`, then push.*
4. Use the settings from the table above → **Save and Deploy**.
5. Every `git push` to `main` now redeploys; pushes to other branches get preview URLs.

### Alternative: deploy from your PC without GitHub

```bash
npm run build
npx wrangler pages deploy dist --project-name nextgenitsolutions
```
(`wrangler` asks you to log in to Cloudflare in the browser the first time.)

## 3. After deployment — verify
- Open every page from the nav and footer.
- `https://<your-address>/sitemap-index.xml` and `/robots.txt` load.
- WhatsApp button opens a chat (once your number is set in `src/config/site.ts`).
- `public/_headers` adds security headers; check them in browser dev tools → Network.

## Free custom domain — findings
- **No reliable, genuinely free custom domain is recommended.** Freenom (.tk/.ml/.ga/.cf/.gq) stopped registrations and is not trustworthy for a business. Community subdomain services (e.g. `eu.org`, `is-a.dev`) are slow to approve, intended for non-commercial/developer use, or can be revoked — not appropriate for a business brand.
- **Recommendation:** launch on `nextgenitsolutions.pages.dev` (free HTTPS, free hosting). When ready, buy a domain (a `.pk` / `.com.pk` from a PKNIC-accredited registrar, or a `.com`). Cloudflare Registrar sells at cost for `.com` but does not sell `.pk`.

## Migrating to a custom domain later
1. Pages project → **Custom domains** → **Set up a domain** → enter `www.yourdomain.com` (and the apex).
2. If the domain's DNS is on Cloudflare, records are added automatically; otherwise add the CNAME Cloudflare shows at your registrar.
3. Update the URL in **three** places, then push:
   - `astro.config.mjs` → `site`
   - `src/config/site.ts` → `url`
   - `public/robots.txt` → `Sitemap:` line
4. In Google Search Console add the new domain property and resubmit the sitemap. Optionally add a Cloudflare **Bulk Redirect** from `*.pages.dev` to the new domain.
