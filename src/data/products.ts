/**
 * PRODUCT CATALOGUE (inquiry catalogue — no prices, no checkout)
 * ---------------------------------------------------------------
 * Add products by appending objects to `products`. The layout updates itself.
 * - image: path under /public, e.g. '/images/products/router-x.webp' (null = placeholder)
 * - brand / model: only fill if verified
 * - availability: only set when you actually track it; null hides the badge
 * Do NOT add prices, stock quantities, warranty terms or specifications you have not verified.
 */
export const categories = [
  { id: 'networking', label: 'Networking Devices' },
  { id: 'cctv', label: 'CCTV Cameras' },
  { id: 'accessories', label: 'Computer Accessories' },
  { id: 'hardware', label: 'IT Hardware' },
  { id: 'security', label: 'Security Equipment' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  image: string | null;
  brand: string | null;
  model: string | null;
  availability: 'In stock' | 'On order' | 'Contact for availability' | null;
}

export const products: Product[] = [
  { id: 'routers', name: 'Routers', category: 'networking', description: 'Wired and wireless routers for offices, shops and homes.', image: null, brand: null, model: null, availability: null },
  { id: 'unmanaged-switches', name: 'Unmanaged Switches', category: 'networking', description: 'Plug-and-play Ethernet switches to expand wired connections.', image: null, brand: null, model: null, availability: null },
  { id: 'managed-switches', name: 'Managed Switches', category: 'networking', description: 'Configurable switches for VLANs and larger business networks.', image: null, brand: null, model: null, availability: null },
  { id: 'access-points', name: 'Wireless Access Points', category: 'networking', description: 'Extend reliable Wi‑Fi coverage across larger spaces.', image: null, brand: null, model: null, availability: null },
  { id: 'network-bridges', name: 'Network Bridges', category: 'networking', description: 'Point-to-point wireless links between buildings or sites.', image: null, brand: null, model: null, availability: null },
  { id: 'ip-cameras', name: 'IP Cameras', category: 'cctv', description: 'Network cameras for indoor and outdoor surveillance.', image: null, brand: null, model: null, availability: null },
  { id: 'cctv-cameras', name: 'CCTV Cameras', category: 'cctv', description: 'Analog / HD CCTV cameras for DVR-based systems.', image: null, brand: null, model: null, availability: null },
  { id: 'nvr-dvr', name: 'NVR / DVR Recorders', category: 'security', description: 'Recorders to store and manage camera footage.', image: null, brand: null, model: null, availability: null },
  { id: 'surveillance-accessories', name: 'Surveillance Accessories', category: 'security', description: 'Power supplies, connectors, mounts and storage for CCTV setups.', image: null, brand: null, model: null, availability: null },
  { id: 'network-cables', name: 'Network Cables & Connectors', category: 'accessories', description: 'Ethernet cabling, patch cords and connectors.', image: null, brand: null, model: null, availability: null },
  { id: 'keyboards-mice', name: 'Keyboards & Mice', category: 'accessories', description: 'Everyday input devices for offices and counters.', image: null, brand: null, model: null, availability: null },
  { id: 'storage', name: 'Storage Devices', category: 'hardware', description: 'Hard drives, SSDs and USB storage.', image: null, brand: null, model: null, availability: null },
  { id: 'pos-hardware', name: 'POS Hardware', category: 'hardware', description: 'Receipt printers, barcode scanners and related counter hardware.', image: null, brand: null, model: null, availability: null },
];
