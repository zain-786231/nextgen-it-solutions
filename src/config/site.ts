/**
 * CENTRAL BUSINESS CONFIGURATION
 * --------------------------------
 * Every business detail shown on the website comes from this file.
 * Values set to `null` are PLACEHOLDERS: the site hides or labels them
 * automatically until you fill them in. Never put secrets or API keys here —
 * this file is shipped to the browser.
 */

export const site = {
  name: 'NextGen I.T Solutions',
  shortName: 'NextGen IT',
  tagline: 'Technology That Moves Your Business Forward.',
  altTagline: 'Smart Software. Reliable Hardware. Complete IT Solutions.',
  description:
    'NextGen I.T Solutions in Arifwala, Pakistan provides custom business software, POS software, networking equipment, CCTV & security systems and computer accessories.',

  /** Production URL. Change when you connect a custom domain. */
 url: 'https://nextgen-it-solutions.zainulabiden690.workers.dev',

  contact: {
    /**
     * PLACEHOLDER — WhatsApp number in international format, digits only,
     * e.g. '923001234567'. While null, WhatsApp buttons open WhatsApp
     * without a pre-selected recipient (the message is still prefilled).
     */
    whatsapp: null as string | null,
    /** PLACEHOLDER — display phone, e.g. '+92 300 1234567' */
    phone: null as string | null,
    /** PLACEHOLDER — e.g. 'info@yourdomain.com' */
    email: null as string | null,
    /** PLACEHOLDER — full street address. City/region below are confirmed. */
    streetAddress: null as string | null,
    city: 'Arifwala',
    region: 'Punjab',
    country: 'Pakistan',
    countryCode: 'PK',
    /** PLACEHOLDER — opening hours text, e.g. 'Mon–Sat, 9:00 AM – 7:00 PM' */
    hours: null as string | null,
    /**
     * PLACEHOLDER — Google Maps "Embed a map" src URL (from Google Maps →
     * Share → Embed a map). While null, a placeholder panel is shown.
     */
    mapEmbedUrl: null as string | null,
    /** Optional: a Google Maps link to the business listing. */
    mapLink: null as string | null,
  },

  /** PLACEHOLDER — add full profile URLs; empty values are hidden. */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
    tiktok: null as string | null,
  },

  /**
   * Optional form backend. Leave null to use the WhatsApp submission fallback.
   * Example (free tier, no secret needed in frontend): a Formspree endpoint
   * like 'https://formspree.io/f/xxxxxxx'. See docs/WEBSITE_GUIDE.md.
   */
  formEndpoint: null as string | null,

  /** PLACEHOLDER — Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX' */
  ga4Id: null as string | null,
  /** PLACEHOLDER — Google Search Console HTML-tag verification token */
  googleSiteVerification: 'bP9lYW-3eQhejNtmm28HkduCSxCUrRytXWZLjACZRcc',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Software', href: '/software/' },
  { label: 'Networking', href: '/networking/' },
  { label: 'CCTV & Security', href: '/cctv-security/' },
  { label: 'Products', href: '/products/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const serviceOptions = [
  'DukaanPRO POS Software',
  'Weighing Scale Software',
  'Custom Software Development',
  'Networking Solutions',
  'CCTV & Security Systems',
  'Computer Accessories / IT Hardware',
  'Other',
];

/** Builds a wa.me link with a properly URL-encoded message. */
export function whatsappLink(message = `Hello ${site.name}, I would like to know more about your services.`) {
  const base = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const placeholder = (value: string | null, label: string) => value ?? `[${label} — to be added]`;
