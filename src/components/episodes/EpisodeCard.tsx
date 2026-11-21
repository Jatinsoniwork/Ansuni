import { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { isEpisodePublished, type EpisodeItem } from '../../data/episodes';
import { SOCIAL_LINKS } from '../../config/links';

interface EpisodeCardProps {
  episode: EpisodeItem;
  featured?: boolean;
}

/**
 * Art-directed placeholder artwork rendered while an episode awaits its real thumbnail.
 * Purely Midnight Black / Charcoal / Warm Ivory / Muted Taupe — zero unrelated accents.
 */
function PlaceholderArtwork({ code, featured }: { code: string; featured?: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal transition-transform duration-700 ease-cinema group-hover:scale-[1.04]">
      {/* Atmospheric subtle radial light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          opacity: 0.75,
          background:
            'radial-gradient(ellipse 68% 64% at 50% 48%, rgba(242, 230, 215, 0.085) 0%, rgba(23, 23, 23, 0.25) 48%, rgba(0, 0, 0, 0.94) 100%)',
        }}
      />

      {/* Subtle acoustic contour rings echoing the layered profile silhouette motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 225"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25 transition-opacity duration-500 group-hover:opacity-40"
      >
        <circle cx="200" cy="112" r="54" stroke="#F2E6D7" strokeOpacity="0.22" strokeWidth="0.7" />
        <circle cx="200" cy="112" r="88" stroke="#A69A8C" strokeOpacity="0.16" strokeWidth="0.6" />
        <circle cx="200" cy="112" r="126" stroke="#A69A8C" strokeOpacity="0.1" strokeWidth="0.5" />
        <line x1="28" y1="112" x2="372" y2="112" stroke="#F2E6D7" strokeOpacity="0.08" strokeWidth="0.5" />
      </svg>

      {/* Architectural viewfinder corners */}
      <span aria-hidden="true" className="absolute left-4 top-4 h-3 w-3 border-l border-t border-ivory/25" />
      <span aria-hidden="true" className="absolute right-4 top-4 h-3 w-3 border-r border-t border-ivory/25" />
      <span aria-hidden="true" className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-ivory/25" />
      <span aria-hidden="true" className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-ivory/25" />

      {/* Ghosted editorial episode index */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-taupe/80">
          Season 01 · Unheard
        </span>
        <span
          className={`mt-1 font-editorial font-light leading-none tracking-tight text-ivory/25 transition-colors duration-500 group-hover:text-ivory/40 ${
            featured ? 'text-7xl sm:text-8xl lg:text-9xl' : 'text-6xl sm:text-7xl'
          }`}
        >
          {code}
        </span>
      </div>
    </div>
  );
}

export function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
  const [noticeVisible, setNoticeVisible] = useState(false);
  const live = isEpisodePublished(episode);

  const title = live ? episode.published.title : episode.placeholder.titlePlaceholder;
  const description = live
    ? episode.published.description
    : episode.placeholder.descriptionPlaceholder;
  const statusLabel = live
    ? episode.published.duration || episode.published.releaseDate || 'Now Streaming'
    : episode.placeholder.statusLabel;

  const thumbnailBlock = (
    <div
      className={`relative overflow-hidden border border-ivory/15 bg-charcoal ${
        featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/10]'
      }`}
    >
      {live && episode.published.thumbnailUrl ? (
        <img
          src={episode.published.thumbnailUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-cinema group-hover:scale-[1.05]"
        />
      ) : (
        <PlaceholderArtwork code={episode.code} featured={featured} />
      )}

      {/* Top metadata badges */}
      <div className="pointer-events-none absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-2">
        <span className="border border-ivory/20 bg-midnight/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-editorial text-ivory backdrop-blur-sm">
          EP {episode.code}
        </span>
        <span className="border border-ivory/15 bg-midnight/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-taupe backdrop-blur-sm">
          {statusLabel}
        </span>
      </div>

      {/* Subtle play reticle for live episodes */}
      {live && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-midnight/20 transition-colors duration-500 group-hover:bg-midnight/40"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/60 bg-midnight/60 text-ivory backdrop-blur-sm transition-transform duration-500 ease-cinema group-hover:scale-110 group-hover:bg-ivory group-hover:text-midnight">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
      )}
    </div>
  );

  // Featured Episode 01 Layout (Split Widescreen Cinema Card)
  if (featured) {
    const inner = (
      <article className="group grid grid-cols-1 border border-ivory/15 bg-charcoal/55 transition-colors duration-500 hover:border-ivory/35 lg:grid-cols-12">
        <div className="lg:col-span-7">{thumbnailBlock}</div>

        <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5 lg:p-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-editorial text-taupe">
              <span>Featured · Episode {episode.code}</span>
              <span className="h-px w-6 bg-ivory/25" aria-hidden="true" />
              <span>{episode.season}</span>
            </div>

            <h3 className="mt-6 font-editorial text-3xl font-light leading-[1.15] text-ivory transition-transform duration-500 ease-cinema group-hover:translate-x-1 sm:text-4xl lg:text-[2.6rem]">
              {title}
            </h3>

            {live && episode.published.guestName && (
              <p className="mt-3 font-mono text-xs uppercase tracking-editorial text-taupe">
                Featuring {episode.published.guestName}
              </p>
            )}

            <p className="mt-5 text-sm font-light leading-relaxed text-ivory/75 sm:text-base">
              {description}
            </p>
          </div>

          <div className="mt-10 border-t border-ivory/10 pt-6">
            {live ? (
              <span className="inline-flex items-center gap-3 border border-ivory/40 bg-ivory px-6 py-3.5 text-xs font-medium uppercase tracking-editorial text-midnight transition-colors duration-300 group-hover:bg-cream">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                <span>Watch Episode</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setNoticeVisible((prev) => !prev)}
                    aria-expanded={noticeVisible}
                    className="inline-flex items-center gap-3 border border-ivory/30 px-6 py-3 text-xs uppercase tracking-editorial text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-midnight"
                  >
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Watch Episode</span>
                  </button>
                  <span className="font-mono text-[10px] uppercase tracking-editorial text-taupe">
                    YouTube Link Pending
                  </span>
                </div>

                {noticeVisible && (
                  <div className="border-l border-ivory/30 bg-midnight/60 px-4 py-3 text-xs leading-relaxed text-ivory/80">
                    Episode {episode.code} has not been uploaded yet. Once published on YouTube, this
                    card will open the episode directly.{' '}
                    <a
                      href={SOCIAL_LINKS.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline decoration-ivory/45 underline-offset-4 transition-colors hover:text-cream"
                    >
                      Subscribe on YouTube
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    );

    if (live) {
      return (
        <a
          href={episode.published.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch Episode ${episode.code}: ${title} on YouTube`}
          className="block"
        >
          {inner}
        </a>
      );
    }

    return inner;
  }

  // Standard Grid Card (Episodes 02–10)
  const cardContent = (
    <article className="group flex h-full flex-col border border-ivory/12 bg-midnight transition-colors duration-500 hover:border-ivory/35 hover:bg-charcoal/50">
      {thumbnailBlock}

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-editorial text-taupe">
            <span>Episode {episode.code}</span>
            <span>{episode.season}</span>
          </div>

          <h3 className="mt-4 font-editorial text-2xl font-light leading-snug text-ivory transition-transform duration-500 ease-cinema group-hover:translate-x-1">
            {title}
          </h3>

          <p className="mt-3 text-sm font-light leading-relaxed text-taupe">{description}</p>
        </div>

        <div className="mt-7 border-t border-ivory/10 pt-5">
          {live ? (
            <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-editorial text-ivory transition-colors group-hover:text-cream">
              <span>Watch Episode</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setNoticeVisible((prev) => !prev)}
                  aria-expanded={noticeVisible}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-ivory/80 transition-colors hover:text-cream"
                >
                  <Play className="h-3 w-3" aria-hidden="true" />
                  <span>Watch Episode</span>
                </button>
                <span className="font-mono text-[10px] uppercase tracking-wider text-taupe/75">
                  Soon
                </span>
              </div>

              {noticeVisible && (
                <div className="border-l border-ivory/25 bg-charcoal px-3 py-2.5 text-[11px] leading-relaxed text-ivory/75">
                  Episode {episode.code} is awaiting YouTube release.{' '}
                  <a
                    href={SOCIAL_LINKS.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-ivory underline decoration-ivory/40 underline-offset-4 hover:text-cream"
                  >
                    Follow on YouTube
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (live) {
    return (
      <a
        href={episode.published.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch Episode ${episode.code}: ${title} on YouTube`}
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
