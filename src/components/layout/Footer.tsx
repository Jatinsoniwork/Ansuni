import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../config/brand';
import { SOCIAL_LINKS } from '../../config/links';
import { AnsuniLogo } from '../ui/AnsuniLogo';
import { AttendEpisodeButton } from '../ui/AttendEpisodeButton';
import { InstagramIcon, WhatsAppIcon, YouTubeIcon } from '../ui/SocialIcons';
import { CINEMA_EASE, HairlineRule } from '../ui/Reveal';

/**
 * Section 13: Closing Statement Animation & Premium Minimal Footer
 */
export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-midnight pt-24 sm:pt-32">
      {/* Subtle atmospheric glow rising behind the closing thought */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 10%, rgba(242, 230, 215, 0.05) 0%, rgba(0, 0, 0, 0) 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <HairlineRule />

        {/* Closing Editorial Sequence */}
        <div className="py-20 text-center sm:py-28 lg:py-32">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: CINEMA_EASE }}
            className="font-mono text-[11px] uppercase tracking-widest text-taupe"
          >
            Until the next conversation
          </motion.p>

          <motion.blockquote
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.05, delay: 0.12, ease: CINEMA_EASE }}
            className="mx-auto mt-6 max-w-4xl font-editorial text-4xl font-light leading-[1.15] tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Some stories end.{' '}
            <span className="italic text-cream">Some stay with you.</span>{' '}
            <span className="mt-3 block font-normal tracking-editorial text-ivory">ANSUNI.</span>
          </motion.blockquote>
        </div>

        <HairlineRule />

        {/* Minimal Footer Body */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-12 md:gap-8 lg:py-20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" aria-label="ANSUNI Home" className="inline-block">
              <AnsuniLogo variant="ivory" className="h-8 w-auto sm:h-9" alt="ANSUNI" loading="lazy" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-taupe">{BRAND.tagline}</p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-taupe/75">
              A quiet, honest platform for unheard stories, untold experiences, and different
              perspectives.
            </p>
          </div>

          {/* Participate Column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
              Participate
            </p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link
                  to="/become-a-guest"
                  className="inline-flex items-center gap-2 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <span>Become a Guest</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-taupe" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <AttendEpisodeButton variant="text" label="Attend an Episode" />
              </li>
              <li>
                <Link
                  to="/season-01"
                  className="inline-flex items-center gap-2 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <span>Season 01</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <span>About ANSUNI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Channels Column */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
              Connect
            </p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <InstagramIcon className="h-4 w-4 text-taupe transition-colors group-hover:text-ivory" />
                  <span>Instagram</span>
                  <span className="font-mono text-xs text-taupe">{SOCIAL_LINKS.instagram.handle}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <YouTubeIcon className="h-4 w-4 text-taupe transition-colors group-hover:text-ivory" />
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-taupe transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-ivory/80 transition-colors duration-300 hover:text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4 text-taupe transition-colors group-hover:text-ivory" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-taupe transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory/10 py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-wider text-taupe/80">{BRAND.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-3 border border-ivory/15 px-4 py-2.5 font-mono text-[11px] uppercase tracking-editorial text-ivory/80 transition-all duration-400 hover:border-ivory/55 hover:text-cream"
          >
            <span>Back to Top</span>
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-400 ease-cinema group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
