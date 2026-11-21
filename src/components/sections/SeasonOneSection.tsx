import { ArrowUpRight } from 'lucide-react';
import {
  isEpisodePublished,
  SEASON_01_EPISODES,
  SEASON_01_META,
} from '../../data/episodes';
import { SOCIAL_LINKS } from '../../config/links';
import { YouTubeIcon } from '../ui/SocialIcons';
import { EpisodeCard } from '../episodes/EpisodeCard';
import { HairlineRule, Reveal } from '../ui/Reveal';

interface SeasonOneSectionProps {
  sectionNumber?: string;
  standalone?: boolean;
}

/**
 * Section 9: Season 01 — Episode Showcase
 *
 * Displays:
 * - One large featured episode (Episode 01)
 * - A cinematic responsive grid containing the remaining 9 episodes (Episodes 02–10)
 */
export function SeasonOneSection({
  sectionNumber = '03',
  standalone = false,
}: SeasonOneSectionProps) {
  const [featuredEpisode, ...remainingEpisodes] = SEASON_01_EPISODES;
  const publishedCount = SEASON_01_EPISODES.filter(isEpisodePublished).length;

  return (
    <section
      id="season-01"
      aria-labelledby="season-01-heading"
      className={`relative bg-midnight ${
        standalone ? 'pb-20 pt-32 sm:pt-40' : 'py-24 sm:py-32 lg:py-40'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {!standalone && <HairlineRule />}

        {/* Section Header */}
        <div
          className={`${standalone ? '' : 'mt-12 lg:mt-20'} flex flex-col justify-between gap-8 lg:flex-row lg:items-end`}
        >
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                {standalone ? SEASON_01_META.seasonCode : `${sectionNumber} / ${SEASON_01_META.seasonCode}`}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id="season-01-heading"
                className="mt-5 font-editorial text-4xl font-light leading-[1.1] tracking-tight text-ivory sm:text-5xl lg:text-6xl"
              >
                Season 01 <span className="italic text-cream">— Ten Stories</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-taupe">
                {SEASON_01_META.subtitle}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-col items-start gap-4 lg:items-end">
            <span className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
              {publishedCount} / {SEASON_01_META.totalEpisodes} Episodes Released
            </span>
            <a
              href={SOCIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-ivory/30 px-6 py-3 text-xs uppercase tracking-editorial text-ivory transition-all duration-400 hover:border-ivory hover:bg-ivory hover:text-midnight"
            >
              <YouTubeIcon className="h-4 w-4" />
              <span>ANSUNI on YouTube</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Transparent Status Strip when episodes are still placeholders */}
        {publishedCount === 0 && (
          <Reveal delay={0.22} className="mt-10">
            <div className="flex flex-col justify-between gap-3 border border-ivory/12 bg-charcoal/45 px-6 py-4 sm:flex-row sm:items-center">
              <p className="text-xs leading-relaxed text-ivory/75">{SEASON_01_META.statusNote}</p>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-editorial text-taupe">
                10-Part Anthology
              </span>
            </div>
          </Reveal>
        )}

        {/* Featured Episode (Episode 01) */}
        {featuredEpisode && (
          <Reveal delay={0.14} className="mt-12 lg:mt-16">
            <EpisodeCard episode={featuredEpisode} featured />
          </Reveal>
        )}

        {/* Remaining 9 Episodes Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-7">
          {remainingEpisodes.map((episode, idx) => (
            <Reveal key={episode.code} delay={0.05 * (idx % 3)} className="h-full">
              <EpisodeCard episode={episode} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
