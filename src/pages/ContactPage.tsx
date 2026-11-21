import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../config/brand';
import { SOCIAL_LINKS } from '../config/links';
import { AttendEpisodeButton } from '../components/ui/AttendEpisodeButton';
import { InstagramIcon, WhatsAppIcon, YouTubeIcon } from '../components/ui/SocialIcons';
import { HairlineRule, Reveal } from '../components/ui/Reveal';

/**
 * Dedicated Contact Page — Official ANSUNI Channels Only
 */
export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — ANSUNI';
  }, []);

  return (
    <div className="bg-midnight pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">Contact</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-editorial text-5xl font-light leading-[1.08] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              Reach out. <span className="italic text-cream">We’re listening.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-taupe sm:text-lg">
              Whether you carry a story you want to share, want to follow Season 01 as episodes
              premiere, or simply want to connect — find ANSUNI across our official spaces below.
            </p>
          </Reveal>
        </div>

        {/* Official Channel Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20">
          <Reveal>
            <a
              href={SOCIAL_LINKS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between border border-ivory/15 bg-charcoal/50 p-8 transition-colors duration-500 hover:border-ivory/45 hover:bg-charcoal sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <WhatsAppIcon className="h-5 w-5 text-ivory" />
                  <ArrowUpRight className="h-4 w-4 text-taupe transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory" />
                </div>
                <h2 className="mt-10 font-editorial text-3xl font-light text-ivory">WhatsApp</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-taupe">
                  The most direct way to share a story idea, nominate a voice, or inquire about
                  becoming a guest.
                </p>
              </div>
              <p className="mt-10 border-t border-ivory/10 pt-4 font-mono text-[11px] uppercase tracking-editorial text-ivory/85">
                Start a Conversation
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between border border-ivory/15 bg-midnight p-8 transition-colors duration-500 hover:border-ivory/45 hover:bg-charcoal/50 sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <InstagramIcon className="h-5 w-5 text-ivory" />
                  <ArrowUpRight className="h-4 w-4 text-taupe transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory" />
                </div>
                <h2 className="mt-10 font-editorial text-3xl font-light text-ivory">Instagram</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-taupe">
                  Behind-the-scenes reflections, quiet excerpts, and premiere updates from Season
                  01.
                </p>
              </div>
              <p className="mt-10 border-t border-ivory/10 pt-4 font-mono text-[11px] tracking-wider text-ivory/85">
                {SOCIAL_LINKS.instagram.handle}
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={SOCIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between border border-ivory/15 bg-midnight p-8 transition-colors duration-500 hover:border-ivory/45 hover:bg-charcoal/50 sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <YouTubeIcon className="h-5 w-5 text-ivory" />
                  <ArrowUpRight className="h-4 w-4 text-taupe transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory" />
                </div>
                <h2 className="mt-10 font-editorial text-3xl font-light text-ivory">YouTube</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-taupe">
                  Subscribe to watch full-length ANSUNI Season 01 conversations as each episode
                  releases.
                </p>
              </div>
              <p className="mt-10 border-t border-ivory/10 pt-4 font-mono text-[11px] uppercase tracking-editorial text-ivory/85">
                Official Channel
              </p>
            </a>
          </Reveal>
        </div>

        {/* Direct Participation Actions */}
        <div className="mt-20 lg:mt-24">
          <HairlineRule />
          <div className="mt-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-editorial text-3xl font-light text-ivory sm:text-4xl">
                {BRAND.tagline}
              </p>
              <p className="mt-2 text-sm text-taupe">
                Interested in sitting across the microphone or attending a recording?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/become-a-guest"
                className="inline-flex items-center gap-3 bg-ivory px-7 py-3.5 text-xs font-medium uppercase tracking-editorial text-midnight transition-colors hover:bg-cream"
              >
                <span>Become a Guest</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <AttendEpisodeButton variant="outline" label="Attend an Episode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
