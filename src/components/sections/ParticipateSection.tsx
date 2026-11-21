import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../../config/links';
import { AttendEpisodeButton } from '../ui/AttendEpisodeButton';
import { WhatsAppIcon } from '../ui/SocialIcons';
import { HairlineRule, Reveal } from '../ui/Reveal';

/**
 * Dual Editorial Invitation Band:
 * - Become a Guest (dedicated page + direct WhatsApp)
 * - Attend an Episode (configurable Google Form CTA)
 */
export function ParticipateSection() {
  return (
    <section aria-label="Participate in ANSUNI" className="relative bg-midnight py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <HairlineRule />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {/* Card 1: Become a Guest */}
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-ivory/15 bg-charcoal/50 p-8 sm:p-12 lg:p-14">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                  04 / Share Your Voice
                </p>
                <h2 className="mt-6 font-editorial text-4xl font-light leading-[1.12] text-ivory sm:text-5xl">
                  Have a story <span className="italic text-cream">worth sharing?</span>
                </h2>
                <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-ivory/75 sm:text-base">
                  Every person has a story. Every perspective matters. If you carry an experience
                  that deserves to be heard — ANSUNI is listening.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SOCIAL_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-ivory px-7 py-3.5 text-xs font-medium uppercase tracking-editorial text-midnight transition-colors duration-300 hover:bg-cream"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Become a Guest</span>
                </a>
                <Link
                  to="/become-a-guest"
                  className="inline-flex items-center gap-2 border border-ivory/25 px-6 py-3.5 text-xs uppercase tracking-editorial text-ivory transition-colors duration-300 hover:border-ivory"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Attend an Episode */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between border border-ivory/15 bg-midnight p-8 sm:p-12 lg:p-14">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                  05 / Be In The Room
                </p>
                <h2 className="mt-6 font-editorial text-4xl font-light leading-[1.12] text-ivory sm:text-5xl">
                  Attend an <span className="italic text-cream">Episode</span>
                </h2>
                <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-taupe sm:text-base">
                  Experience the stillness of a live ANSUNI recording in person. Express your
                  interest to join an upcoming intimate studio session.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <AttendEpisodeButton variant="outline" label="Attend an Episode" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
