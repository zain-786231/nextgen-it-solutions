# Website Guide

## Stack
Astro 7 (static output, TypeScript) · Tailwind CSS 4 · Lucide icons · Inter variable font (self-hosted) · @astrojs/sitemap. No React was needed: the few interactive parts (mobile menu, product filter, form) are small vanilla scripts, keeping JavaScript minimal.

## Commands
```bash
npm install        # once
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the built site locally
node scripts/og.mjs  # regenerate the social share image
```

## Structure
```
src/config/site.ts        business details, nav, WhatsApp link builder  ← edit this first
src/data/products.ts      product catalogue
src/data/software.ts      software products
src/layouts/Base.astro    <head>, SEO meta, JSON-LD, header/footer
src/components/           Header, Footer, InquiryForm, Visual, CTA, ServicePage ...
src/pages/                index, about, software, networking, cctv-security, products, contact, privacy-policy, 404
src/styles/global.css     design tokens (colours, type) and shared component classes
public/                   robots.txt, _headers, favicon, og-image, images/
docs/                     these guides
```

## Design tokens
Defined in `@theme` in `src/styles/global.css`: `ink-950 #080D18`, `ink-900 #101827`, `ink-800 #141F30`, `blue #2878FF`, `cyan #20D9E8`, `fg #F5F7FC`, `muted #9AA9BD`, `line #22324a`.

## Contact form — how it works and its limits
- Fields: name*, business, phone*, email, service*, message*. Browser validation + custom error message; invalid fields get `aria-invalid`.
- Spam protection: hidden honeypot field + minimum time on page before submit.
- **Default (no backend):** submit opens WhatsApp with the inquiry pre-filled and properly URL-encoded.
  - Limitations: the visitor must have WhatsApp and must press *Send* themselves; nothing is stored on the website; if `contact.whatsapp` is not set yet, WhatsApp asks the visitor to choose a contact.
- **Optional email delivery:** create a free form endpoint (e.g. Formspree) and set `formEndpoint` in `site.ts`. The form then POSTs JSON there and shows a success/error message. No secret keys are needed in the frontend. Update the privacy policy wording if you do this (it switches automatically).

## Accessibility & performance notes
- Skip link, visible focus rings, keyboard-operable menu (Esc closes), `aria-current` on nav, `aria-pressed` on filters, live region for product count.
- `prefers-reduced-motion` disables all animation; reveal-on-scroll content is visible without JS.
- No images over the network on first load besides the font; illustrations are inline SVG.
