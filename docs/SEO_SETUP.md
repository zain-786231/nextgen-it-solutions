# SEO Setup Guide

No one can guarantee first-page rankings. What this site does is follow Google Search Central guidelines so Google can crawl, understand and fairly rank it.

## Already built in
- Unique `<title>` and meta description per page (checked: no duplicates).
- One `<h1>` per page, semantic sections, breadcrumbs.
- Canonical URLs, Open Graph + Twitter card tags, `og-image.png` (1200×630; regenerate with `node scripts/og.mjs`).
- `sitemap-index.xml` generated on every build (404 excluded), `robots.txt` pointing to it.
- JSON-LD structured data:
  - `LocalBusiness` (Organization) on every page — only verified fields; phone/email/street/social are added **automatically** once filled in `src/config/site.ts`.
  - `WebSite` on the homepage.
  - `BreadcrumbList` on inner pages.
  - `SoftwareApplication` for DukaanPRO and Weighing Scale Software. **Verify `operatingSystem` in `src/data/software.ts`.**
  - No ratings or reviews (never add fake ones).
- Local keywords are used naturally in titles/copy: IT solutions in Arifwala, POS software Pakistan, custom software development, weighing scale software, CCTV in Arifwala, networking equipment, computer accessories.

## 1. Google Search Console
1. Go to https://search.google.com/search-console → **Add property**.
2. Choose **URL prefix** → `https://nextgenitsolutions.pages.dev/` (`.pages.dev` cannot use Domain verification).
3. Choose **HTML tag** verification. Copy only the `content="..."` value.
4. Paste it into `googleSiteVerification` in `src/config/site.ts`, push, wait for deploy, click **Verify**.
5. **Sitemaps** → submit `sitemap-index.xml`.
6. **URL Inspection** → inspect the homepage → **Request indexing**. Repeat for key pages.

## 2. Google Analytics 4
1. https://analytics.google.com → Admin → Create property → Web data stream for your URL.
2. Copy the Measurement ID (`G-XXXXXXXXXX`) into `ga4Id` in `src/config/site.ts` and push.
3. The privacy policy updates its analytics paragraph automatically when `ga4Id` is set.

## 3. Google Business Profile (most important for local searches)
1. https://business.google.com → add the business, category e.g. *Computer support and services* / *Software company* / *Security system supplier*.
2. Use **exactly** the same name, address and phone as `src/config/site.ts` (NAP consistency).
3. Add the website URL, hours, real photos of the shop/work, and complete verification (postcard/phone/video as offered).
4. Optional: once the listing is live, put its share link in `contact.mapLink` and the "Embed a map" URL in `contact.mapEmbedUrl`.
5. Ask real customers for reviews on Google — never post reviews yourself.

## 4. Ongoing
- Replace placeholder graphics with real photos (descriptive filenames + alt text).
- Add real product brands/models you stock.
- Check Search Console **Pages** and **Core Web Vitals** reports monthly.
- Validate structured data any time: https://search.google.com/test/rich-results and https://validator.schema.org/.
