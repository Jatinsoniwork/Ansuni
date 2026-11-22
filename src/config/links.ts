/**
 * Centralized External Links & Configurable Destinations for ANSUNI.
 *
 * Official social accounts only — do not invent additional platforms.
 */

export const SOCIAL_LINKS = {
  instagram: {
    label: 'Instagram',
    handle: '@ansuni_unsaid',
    url: 'https://www.instagram.com/ansuni_unsaid/',
  },
  youtube: {
    label: 'YouTube',
    handle: 'ANSUNI on YouTube',
    url: 'https://www.youtube.com/channel/UC0VqBtte-nbA9kvGYAdzpCA',
  },
  whatsapp: {
    label: 'WhatsApp',
    handle: 'Message ANSUNI',
    url: 'https://wa.me/qr/JKHHNYIWM2XBM1',
  },
} as const;

/**
 * ATTEND AN EPISODE — GOOGLE FORM CONFIGURATION
 * -----------------------------------------------------------------------------
 * Replace `null` below with the official Google Form URL once ready, e.g.:
 *   export const ATTEND_EPISODE_CONFIG = {
 *     googleFormUrl: 'https://docs.google.com/forms/d/e/.../viewform',
 *   };
 *
 * While set to `null`, every "Attend an Episode" CTA gracefully informs visitors
 * that registration is not yet open and avoids dead or fake destinations.
 */
export const ATTEND_EPISODE_CONFIG: {
  googleFormUrl: string | null;
  statusLabel: string;
  headline: string;
  description: string;
  instruction: string;
} = {
  googleFormUrl: null,
  statusLabel: 'Live Studio Audience',
  headline: 'Attend a Live Recording',
  description:
    'Experience the raw emotion and human perspectives in person. DM us to be an attendee for upcoming live ANSUNI studio sessions.',
  instruction:
    'Send us a direct message on Instagram or WhatsApp with your name and city to reserve your attendee seat.',
};

export interface NavItem {
  index: string;
  label: string;
  to: string;
  subtitle: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    index: '01',
    label: 'Home',
    to: '/',
    subtitle: 'Return to the beginning',
  },
  {
    index: '02',
    label: 'About ANSUNI',
    to: '/about',
    subtitle: 'The philosophy behind the silence',
  },
  {
    index: '03',
    label: 'Why ANSUNI?',
    to: '/#why-ansuni',
    subtitle: 'Four truths that guide every conversation',
  },
  {
    index: '04',
    label: 'Season 01',
    to: '/season-01',
    subtitle: 'Ten unheard stories — premiering soon',
  },
  {
    index: '05',
    label: 'Become a Guest',
    to: '/become-a-guest',
    subtitle: 'Bring your story to the room',
  },
  {
    index: '06',
    label: 'Contact',
    to: '/contact',
    subtitle: 'Reach out across our official channels',
  },
];
