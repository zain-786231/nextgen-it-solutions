/**
 * SOFTWARE CATALOGUE
 * Only list features you have verified. To add a real screenshot, put the
 * image in /public/images/software/ and set `screenshot` to its path,
 * e.g. '/images/software/dukaanpro-dashboard.webp'.
 */
export interface SoftwareProduct {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  /** null = shows a clearly labelled screenshot placeholder */
  screenshot: string | null;
  /** Used for SoftwareApplication structured data (genuine products only) */
  schema?: { applicationCategory: string; operatingSystem: string };
  icon: 'store' | 'scale' | 'code' | 'boxes' | 'receipt' | 'workflow';
}

export const software: SoftwareProduct[] = [
  {
    slug: 'dukaanpro-pos',
    name: 'DukaanPRO POS',
    category: 'Point of Sale',
    summary: 'Point-of-sale and shop management software built for retail businesses in Pakistan.',
    description:
      'DukaanPRO brings billing, stock, customers, suppliers and credit (udhaar) records into one system, so shop owners can run the counter and see the state of the business without juggling registers.',
    features: [
      'Billing and invoicing',
      'Inventory management',
      'Customer management',
      'Supplier management',
      'Udhaar and customer ledger',
      'Business reports',
      'Offline-first operation',
    ],
    screenshot: null,
    schema: { applicationCategory: 'BusinessApplication', operatingSystem: 'Windows' }, // VERIFY operating system
    icon: 'store',
  },
  {
    slug: 'weighing-scale-software',
    name: 'Weighing Scale Software',
    category: 'Weighing & Billing',
    summary: 'Software that connects to weighing scales for weight-based billing and records.',
    description:
      'Designed for businesses that sell or receive goods by weight. The software reads from the weighing scale and turns each weighing into a transaction record, reducing manual entry.',
    features: [
      'Weighing scale integration',
      'Weight-based transactions',
      'Billing and record management',
      'Customizable business workflows',
    ],
    screenshot: null,
    schema: { applicationCategory: 'BusinessApplication', operatingSystem: 'Windows' }, // VERIFY operating system
    icon: 'scale',
  },
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    category: 'Bespoke Solutions',
    summary: 'Software designed around how your business actually works.',
    description:
      'When off-the-shelf software does not fit, we design and build applications around your processes — from POS and inventory systems to industry-specific desktop tools.',
    features: [
      'POS systems',
      'Inventory systems',
      'Business automation',
      'Customized desktop applications',
      'Industry-specific software',
    ],
    screenshot: null,
    icon: 'code',
  },
];

/** Homepage software showcase tiles. `href` links to the detailed section. */
export const softwareShowcase = [
  { name: 'DukaanPRO POS Software', icon: 'store', href: '/software/#dukaanpro-pos', text: 'Billing, stock, customers, suppliers and udhaar ledger in one shop system.', features: ['Billing & invoicing', 'Udhaar ledger', 'Offline-first'] },
  { name: 'Weighing Scale Software', icon: 'scale', href: '/software/#weighing-scale-software', text: 'Connects with weighing scales for weight-based billing and records.', features: ['Scale integration', 'Weight-based billing', 'Records'] },
  { name: 'Custom POS Solutions', icon: 'receipt', href: '/software/#custom-software-development', text: 'Point-of-sale systems tailored to your counter, products and workflow.', features: ['Your workflow', 'Your reports', 'Your branding'] },
  { name: 'Inventory Management', icon: 'boxes', href: '/software/#custom-software-development', text: 'Track stock in and out so you know what you have and what to reorder.', features: ['Stock tracking', 'Purchases', 'Reports'] },
  { name: 'Billing & Accounting', icon: 'receipt', href: '/software/#custom-software-development', text: 'Invoices, payments and customer balances kept in order.', features: ['Invoices', 'Ledgers', 'Balances'] },
  { name: 'Business Automation', icon: 'workflow', href: '/software/#custom-software-development', text: 'Replace repetitive manual work with software built for the task.', features: ['Process review', 'Custom tools', 'Integration'] },
] as const;
