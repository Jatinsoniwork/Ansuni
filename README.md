# ANSUNI — Official Website

**Because every story deserves a voice.**

A cinematic, editorial web platform built for **ANSUNI** with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

---

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Managing Future Content

### 1. Publishing Season 01 Episodes (YouTube Links & Metadata)

Open [`src/data/episodes.ts`](./src/data/episodes.ts).  
Each of the 10 episodes separates temporary `placeholder` content from real `published` episode data.

To publish an episode, replace `published: null` with your real data:

```ts
published: {
  title: 'Your Real Episode Title (English / Hindi / Hinglish)',
  description: 'A short editorial summary of the conversation.',
  youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  thumbnailUrl: '/images/episodes/ep-01.jpg', // optional 16:9 image
  guestName: 'Guest Name',                    // optional
  duration: '46 min',                         // optional
  releaseDate: 'November 2026',               // optional
},
```

Once `youtubeUrl` is added, the episode card automatically switches from placeholder mode to live mode and opens the YouTube video directly.

### 2. Configuring the "Attend an Episode" Google Form

Open [`src/config/links.ts`](./src/config/links.ts) and set `ATTEND_EPISODE_CONFIG.googleFormUrl`:

```ts
export const ATTEND_EPISODE_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/.../viewform',
  ...
};
```

While set to `null`, every **Attend an Episode** CTA transparently informs visitors that registration is not yet configured and links to ANSUNI's official Instagram and WhatsApp channels.

---

## Brand Palette (`src/config/brand.ts` & `tailwind.config.ts`)

| Token | Hex | Role |
| :--- | :--- | :--- |
| Midnight Black | `#000000` | Primary canvas (~70%) |
| Warm Ivory | `#F2E6D7` | Primary typography & identity (~25%) |
| Charcoal | `#171717` | Elevated dark surfaces |
| Muted Taupe | `#A69A8C` | Secondary metadata & hairlines (~5%) |
| Soft Cream | `#FAF6EF` | High-contrast editorial accents |
