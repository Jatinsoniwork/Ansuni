/**
 * Centralized ANSUNI Brand Identity & Official Colour Palette.
 * Strictly follow these tokens across all surfaces and components.
 */
export const BRAND = {
  name: 'ANSUNI',
  tagline: 'Because every story deserves a voice.',
  closingStatement: 'Some stories end. Some stay with you. ANSUNI.',
  centralThought: 'Some stories are heard. Some remain ANSUNI.',
  copyright: `© ${new Date().getFullYear()} ANSUNI. All rights reserved.`,
  logos: {
    /** Transparent Warm Ivory (#F3E6D8) logo for Midnight Black / Charcoal surfaces */
    ivoryTransparent: '/images/brand/ansuni-logo-ivory.png',
    /** Transparent Midnight Black (#000000) logo for Warm Ivory / Soft Cream surfaces */
    blackTransparent: '/images/brand/ansuni-logo-black.png',
    /** Pure SVG vector variants matching the updated 7-voices silhouette identity */
    ivoryVector: '/images/brand/ansuni-logo-ivory.svg',
    blackVector: '/images/brand/ansuni-logo-black.svg',
    vector: '/images/brand/ansuni-logo-vector.svg',
    /** Original unaltered master logo file */
    original: '/images/brand/ansuni-logo-original.png',
  },
  colors: {
    midnight: '#000000',
    ivory: '#F3E6D8',
    ivoryAlt: '#F2E6D7',
    charcoal: '#171717',
    taupe: '#A69A8C',
    cream: '#FAF6EF',
  },
} as const;
