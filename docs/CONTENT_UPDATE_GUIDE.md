# Content Update Guide

All content lives in a few files. Edit, then `npm run build` (or push to GitHub to auto-deploy).

## Business details — `src/config/site.ts`
Any value that is `null` is a placeholder and is hidden or shown with an amber "to be added" tag.

| Field | Example | Effect |
|---|---|---|
| `contact.whatsapp` | `'923001234567'` (digits only, country code, no +) | All WhatsApp buttons, floating button and form go to this number |
| `contact.phone` | `'+92 300 1234567'` | Footer, contact page, structured data |
| `contact.email` | `'info@yourdomain.com'` | Footer, contact page, structured data |
| `contact.streetAddress` | `'Main Bazaar, ...'` | Address everywhere + structured data |
| `contact.hours` | `'Mon–Sat, 9:00 AM – 7:00 PM'` | Footer + contact page |
| `contact.mapEmbedUrl` | Google Maps → Share → Embed a map → `src` URL | Map on contact page |
| `social.*` | full profile URLs | Social icons in footer/contact + `sameAs` in structured data |
| `formEndpoint` | e.g. a Formspree URL | Form sends by email instead of WhatsApp |
| `ga4Id`, `googleSiteVerification` | see SEO_SETUP.md | Analytics / Search Console |

## Products — `src/data/products.ts`
Add an object to `products`:
```ts
{ id: 'tp-link-sg108', name: '8-Port Gigabit Switch', category: 'networking',
  description: 'Unmanaged desktop switch.', image: '/images/products/sg108.webp',
  brand: 'TP-Link', model: 'TL-SG108', availability: 'In stock' },
```
- `category` must be one of: `networking`, `cctv`, `accessories`, `hardware`, `security`.
- Only fill `brand`/`model`/`availability` when verified. There are deliberately **no price fields**.
- Put images in `public/images/products/` — square-ish 800×600 WebP under ~100 KB is ideal.

## Software — `src/data/software.ts`
- Edit `features` lists (only verified capabilities).
- Add a real screenshot: save to `public/images/software/dukaanpro.webp`, set `screenshot: '/images/software/dukaanpro.webp'`. The "placeholder" label disappears automatically.
- Do not include licence keys, credentials or internal data in screenshots.

## Replacing illustrations with photos
Capability, networking and CCTV visuals are hand-built vector graphics (`src/components/Visual.astro`) — they are lightweight and license-free. To use real photography, place licensed/own photos in `src/assets/` and replace `<Visual ... />` with Astro's optimised image component:
```astro
---
import { Image } from 'astro:assets';
import cctvPhoto from '../assets/cctv-install.jpg';
---
<Image src={cctvPhoto} alt="Technician installing a dome camera at a warehouse entrance" widths={[400, 800, 1200]} sizes="(min-width: 768px) 33vw, 100vw" />
```

## About page history
`src/pages/about.astro` has a marked placeholder for company history. Replace it with verified facts only.
