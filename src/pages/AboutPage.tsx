import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_CONTENT, EDITORIAL_IMAGES, WHY_ANSUNI_PILLARS } from '../data/editorial';
import { SOCIAL_LINKS } from '../config/links';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { HairlineRule, Reveal } from '../components/ui/Reveal';

/**
 * Section 7: Dedicated About ANSUNI Editorial Page
 */
export function AboutPage() {
  useEffect(() => {
    document.title = 'About ANSUNI — Some stories are heard. Some remain ANSUNI.';
  }, []);

  return (
    <div className="bg-midnight pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Opening Editorial Header */}
        <div className="max-w-4xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
              {ABOUT_CONTENT.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-editorial text-5xl font-light leading-[1.08] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              Some stories are heard.{' '}
              <span className="italic text-cream">Some remain ANSUNI.</span>
            </h1>
          </Reveal>
        </div>

        {/* Full-Width Atmospheric Studio Still */}
        <Reveal delay={0.18} className="mt-14 lg:mt-20">
          <div className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden border border-ivory/15 bg-charcoal">
            <img
              src={EDITORIAL_IMAGES.aboutStudio.src}
              alt={EDITORIAL_IMAGES.aboutStudio.alt}
              className="h-full w-full object-cover saturate-[0.72]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/75 via-transparent to-midnight/25"
            />
          </div>
        </Reveal>

        {/* Core Story Narrative */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                Why We Exist
              </p>
              <p className="mt-4 font-editorial text-2xl italic leading-snug text-ivory/85">
                A platform built around stillness, attention, and the courage to speak plainly.
              </p>
            </Reveal>
          </div>

          <div className="space-y-7 text-lg font-light leading-[1.9] text-ivory/80 lg:col-span-8">
            {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
              <Reveal key={idx} delay={0.08 * idx}>
                <p
                  className={
                    idx === 1 || idx === ABOUT_CONTENT.paragraphs.length - 1
                      ? 'font-editorial text-3xl font-light italic leading-snug text-cream sm:text-4xl'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Three Editorial Reflections */}
        <div className="mt-24 lg:mt-32">
          <HairlineRule />
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-20 lg:gap-12">
            {ABOUT_CONTENT.extendedReflections.map((item, idx) => (
              <Reveal key={item.index} delay={0.1 * idx}>
                <article className="border-t border-ivory/15 pt-7">
                  <span className="font-mono text-xs tracking-editorial text-taupe">
                    {item.index}
                  </span>
                  <h2 className="mt-5 font-editorial text-3xl font-light text-ivory">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm font-light leading-relaxed text-taupe sm:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Four Convictions Summary */}
        <div className="mt-24 lg:mt-32">
          <HairlineRule />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                  Our Ethos
                </p>
                <h2 className="mt-4 font-editorial text-4xl font-light text-ivory">
                  What guides <span className="italic text-cream">ANSUNI</span>
                </h2>
              </Reveal>
            </div>

            <div className="divide-y divide-ivory/12 border-y border-ivory/12 lg:col-span-8">
              {WHY_ANSUNI_PILLARS.map((pillar, idx) => (
                <Reveal key={pillar.number} delay={0.07 * idx}>
                  <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="font-mono text-xs tracking-editorial text-taupe">
                      {pillar.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-editorial text-2xl font-light text-ivory">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-light text-taupe">{pillar.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Next Step CTAs */}
        <Reveal delay={0.15} className="mt-20 flex flex-wrap items-center gap-5 border-t border-ivory/12 pt-12">
          <Link
            to="/season-01"
            className="inline-flex items-center gap-3 border border-ivory/40 bg-ivory px-7 py-3.5 text-xs font-medium uppercase tracking-editorial text-midnight transition-colors hover:bg-cream"
          >
            <span>Explore Season 01</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <a
            href={SOCIAL_LINKS.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-ivory/30 px-7 py-3.5 text-xs uppercase tracking-editorial text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Become a Guest</span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
