// Regenerates public/og-image.png (1200x630). Run: node scripts/og.mjs
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#2878FF"/><stop offset="1" stop-color="#20D9E8"/></linearGradient>
<radialGradient id="r" cx=".85" cy=".1" r=".7"><stop stop-color="#2878FF" stop-opacity=".35"/><stop offset="1" stop-color="#080D18" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="#080D18"/><rect width="1200" height="630" fill="url(#r)"/>
<rect x="80" y="80" width="72" height="72" rx="16" fill="#141F30" stroke="#22324a"/><path d="M100 132V100l32 32V100" fill="none" stroke="url(#g)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<text x="172" y="128" font-family="Segoe UI, Arial" font-size="30" font-weight="600" fill="#F5F7FC">NextGen I.T Solutions</text>
<text x="80" y="300" font-family="Segoe UI, Arial" font-size="68" font-weight="700" fill="#F5F7FC">Powering Businesses With</text>
<text x="80" y="385" font-family="Segoe UI, Arial" font-size="68" font-weight="700" fill="url(#g)">Smarter Technology.</text>
<text x="80" y="480" font-family="Segoe UI, Arial" font-size="28" fill="#9AA9BD">Business Software · Networking · CCTV &amp; Security · IT Hardware</text>
<text x="80" y="540" font-family="Segoe UI, Arial" font-size="24" fill="#20D9E8">Arifwala, Punjab, Pakistan</text></svg>`;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('og-image.png written');
