/**
 * Editorial Content & Visual Asset Registry for ANSUNI.
 */

export interface HeroPortrait {
  id: string;
  src: string;
  alt: string;
  caption: string;
  perspective: string;
}

export const HERO_PORTRAITS: HeroPortrait[] = [
  {
    id: 'portrait-1',
    src: '/images/editorial/hero-portrait-1.jpg',
    alt: 'Editorial portrait of a thoughtful woman illuminated by soft warm ivory light against a dark studio backdrop',
    caption: 'Perspective I',
    perspective: 'The quiet strength behind unspoken choices',
  },
  {
    id: 'portrait-2',
    src: '/images/editorial/hero-portrait-2.jpg',
    alt: 'Editorial portrait of an older man with silver-streaked beard emerging from chiaroscuro studio shadow',
    caption: 'Perspective II',
    perspective: 'Years of lived truth, finally given stillness',
  },
  {
    id: 'portrait-3',
    src: '/images/editorial/hero-portrait-3.jpg',
    alt: 'Editorial portrait of a young man in quiet reflection under subtle warm ivory lighting',
    caption: 'Perspective III',
    perspective: 'Questions a generation carries in silence',
  },
];

export const EDITORIAL_IMAGES = {
  aboutStudio: {
    src: '/images/editorial/about-studio.jpg',
    alt: 'An intimate matte-black studio microphone softly illuminated by warm ivory light in a darkened room',
  },
  guestConversation: {
    src: '/images/editorial/guest-conversation.jpg',
    alt: 'Two people seated across a dimly lit studio table in deep, genuine conversation',
  },
} as const;

export const HERO_CONTENT = {
  eyebrow: 'A Space for Unheard Stories',
  headline: 'Every Story Has a Side That Remains Unheard.',
  tagline: 'Because every story deserves a voice.',
  ctaLabel: 'EXPLORE ANSUNI',
} as const;

export const ABOUT_CONTENT = {
  eyebrow: 'About ANSUNI',
  centralThought: 'Some stories are heard. Some remain ANSUNI.',
  paragraphs: [
    'Every individual carries a story. Some are shared openly, while others remain buried beneath everyday conversations.',
    'ANSUNI exists to create a space for those stories.',
    'We believe that every experience holds meaning, every perspective deserves attention and every voice has the power to make someone feel understood.',
    'Because sometimes, all a story needs is someone willing to listen.',
  ],
  extendedReflections: [
    {
      index: 'I',
      title: 'Listening Without Hurry',
      body: 'Most conversations today are interrupted before they even find their truth. Inside ANSUNI, pauses are not edited out — they are where honesty begins.',
    },
    {
      index: 'II',
      title: 'Language That Feels Like Home',
      body: 'Whether spoken in English, Hindi, or natural Hinglish, every guest speaks in the rhythm they actually think and feel in — never scripted, never performative.',
    },
    {
      index: 'III',
      title: 'Human Before Headline',
      body: 'We are not looking for viral soundbites or polished personas. We sit across from real people carrying lived experiences, quiet turning points, and perspectives rarely invited to the table.',
    },
  ],
} as const;

export interface WhyPillar {
  number: string;
  title: string;
  description: string;
  note: string;
}

export const WHY_ANSUNI_PILLARS: WhyPillar[] = [
  {
    number: '01',
    title: 'Every Voice Matters',
    description: 'Every individual deserves the opportunity to express their story.',
    note: 'No story is too quiet to belong here.',
  },
  {
    number: '02',
    title: 'Beyond the Obvious',
    description: 'We explore the perspectives that are often overlooked.',
    note: 'Looking beneath surface narratives.',
  },
  {
    number: '03',
    title: 'Different Perspectives, One Platform',
    description: 'Different experiences, different opinions and different ways of seeing life.',
    note: 'Curiosity without judgment.',
  },
  {
    number: '04',
    title: 'Stories That Deserve to Be Heard',
    description: 'We create space for conversations that matter.',
    note: 'Honest, unhurried, deeply human.',
  },
];

export const BECOME_A_GUEST_CONTENT = {
  eyebrow: 'Become a Guest',
  headline: 'Have a story worth sharing?',
  supportingLine: "We'd love to hear it.",
  paragraphs: [
    'Every person has a story. Every perspective matters.',
    'If you have something to share, a thought to express, or an experience that deserves to be heard — ANSUNI is listening.',
  ],
  ctaLabel: 'BECOME A GUEST',
  reassuranceNotes: [
    {
      label: '01 · No Fame Required',
      detail: 'You do not need a public profile — only an honest lived experience or perspective worth sharing.',
    },
    {
      label: '02 · Speak Naturally',
      detail: 'Share your thoughts comfortably in English, Hindi, or Hinglish at your own pace.',
    },
    {
      label: '03 · Direct & Personal',
      detail: 'Reach out directly on WhatsApp. A real conversation starts simply with hello.',
    },
  ],
} as const;
