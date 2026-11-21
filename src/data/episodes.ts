/**
 * SEASON 01 — EPISODE DATA STORE
 * =============================================================================
 *
 * HOW TO PUBLISH AN EPISODE:
 * For any episode below, simply fill in the `published` object (setting `title`,
 * `description`, `youtubeUrl`, and optionally `thumbnailUrl`, `guestName`,
 * `duration`, and `releaseDate`).
 *
 * As soon as `published.youtubeUrl` is provided:
 * - The episode card automatically switches from placeholder mode to live mode.
 * - The card displays your real title, description, and thumbnail.
 * - Clicking the card or "Watch Episode" redirects directly to that episode's
 *   YouTube video in a new tab.
 *
 * Placeholder content is strictly separated inside `placeholder` so temporary
 * copy is never confused with real episode metadata.
 */

export interface PublishedEpisodeData {
  /** Official episode title (English, Hindi, or Hinglish) */
  title: string;
  /** Short editorial description shown on the card */
  description: string;
  /** Direct YouTube video URL for this specific episode */
  youtubeUrl: string;
  /** Path or URL to the episode thumbnail (16:9 recommended) */
  thumbnailUrl?: string | null;
  /** Optional guest name or perspective descriptor */
  guestName?: string | null;
  /** Optional formatted duration, e.g. "48 min" */
  duration?: string | null;
  /** Optional release date label, e.g. "January 2026" */
  releaseDate?: string | null;
}

export interface EpisodePlaceholderData {
  /** Temporary label shown until real title is added */
  titlePlaceholder: string;
  /** Temporary note shown until real description is added */
  descriptionPlaceholder: string;
  /** Short editorial status badge */
  statusLabel: string;
}

export interface EpisodeItem {
  /** Episode sequence number (1 through 10) */
  number: number;
  /** Zero-padded display index ("01" through "10") */
  code: string;
  /** Season identifier */
  season: string;
  /** Marks the lead featured episode in the Season 01 layout */
  featured?: boolean;
  /**
   * REAL EPISODE DATA — keep `null` until this episode is uploaded to YouTube.
   * Populate this object to publish the episode immediately.
   */
  published: PublishedEpisodeData | null;
  /**
   * TEMPORARY PLACEHOLDER DATA — rendered automatically while `published` is null.
   */
  placeholder: EpisodePlaceholderData;
}

export const SEASON_01_META = {
  seasonCode: 'SEASON 01',
  totalEpisodes: 10,
  subtitle: 'Ten unfiltered conversations. Ten perspectives waiting to be heard.',
  statusNote:
    'Season 01 is currently in production. Official titles, thumbnails, and direct YouTube links will appear here as each episode premieres.',
} as const;

export const SEASON_01_EPISODES: EpisodeItem[] = Array.from({ length: 10 }, (_, idx) => {
  const num = idx + 1;
  const code = String(num).padStart(2, '0');
  const isFeatured = num === 1;

  return {
    number: num,
    code,
    season: 'S01',
    featured: isFeatured,
    published: null,
    placeholder: {
      titlePlaceholder: isFeatured
        ? 'Season 01 Premiere — Episode Title Coming Soon'
        : `Episode ${code} — Title Coming Soon`,
      descriptionPlaceholder: isFeatured
        ? 'The opening conversation of ANSUNI Season 01. Episode title, story notes, and direct YouTube link will be published here upon release.'
        : 'An upcoming Season 01 conversation. Full episode title, story summary, and YouTube link will be added upon release.',
      statusLabel: isFeatured ? 'Season Premiere · Unreleased' : 'Awaiting Release',
    },
  };
});

/** Helper to check whether an episode has a live YouTube destination */
export function isEpisodePublished(
  episode: EpisodeItem
): episode is EpisodeItem & { published: PublishedEpisodeData } {
  return Boolean(episode.published && episode.published.youtubeUrl);
}
