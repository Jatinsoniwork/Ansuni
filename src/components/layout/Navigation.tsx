import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../config/brand';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../config/links';
import { AnsuniLogo } from '../ui/AnsuniLogo';
import { AttendEpisodeButton } from '../ui/AttendEpisodeButton';
import { InstagramIcon, WhatsAppIcon, YouTubeIcon } from '../ui/SocialIcons';
import { CINEMA_EASE } from '../ui/Reveal';

interface NavigationProps {
  visible?: boolean;
}

/**
 * Section 5: Minimal Hamburger Navigation System
 *
 * Initial header displays ONLY:
 * - ANSUNI logo (exact original identity)
 * - Minimal Hamburger menu icon
 *
 * Clicking reveals a full-screen animated editorial navigation overlay.
 */
export function Navigation({ visible = true }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 120);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  // Close menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('/#')) {
      event.preventDefault();
      const targetId = to.slice(2);
      setMenuOpen(false);

      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      } else {
        navigate(`/#${targetId}`);
      }
      return;
    }

    if (to === '/' && location.pathname === '/') {
      event.preventDefault();
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      return;
    }

    setMenuOpen(false);
  };

  const isRouteActive = (to: string) => {
    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.slice(1);
    }
    return location.pathname === to && !location.hash;
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: CINEMA_EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          menuOpen
            ? 'bg-transparent'
            : scrolled
              ? 'border-b border-ivory/10 bg-midnight/85 backdrop-blur-md'
              : 'bg-gradient-to-b from-midnight/85 via-midnight/35 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:h-24 lg:px-14">
          <Link
            to="/"
            onClick={(event) => handleNavClick(event, '/')}
            aria-label="ANSUNI Home"
            className="relative z-[60] inline-flex items-center py-1 transition-opacity duration-300 hover:opacity-85"
          >
            <AnsuniLogo variant="ivory" className="h-6 w-auto sm:h-7 md:h-8" alt="ANSUNI" />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="ansuni-navigation-overlay"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="group relative z-[60] flex h-12 w-12 items-center justify-center border border-ivory/15 bg-midnight/40 transition-colors duration-400 hover:border-ivory/50"
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="flex w-5 flex-col items-end justify-center gap-[6px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 3.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: CINEMA_EASE }}
                className="block h-[1.5px] bg-ivory"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -3.5, width: 20 } : { rotate: 0, y: 0, width: 13 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: CINEMA_EASE }}
                className="block h-[1.5px] bg-ivory transition-all duration-300 group-hover:w-5"
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="ansuni-navigation-overlay"
            aria-label="Primary navigation"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.65, ease: CINEMA_EASE }}
            className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-midnight"
          >
            {/* Atmospheric Warm Ivory Ambient Vignette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 78% 36%, rgba(242, 230, 215, 0.055) 0%, rgba(23, 23, 23, 0.14) 50%, rgba(0, 0, 0, 0.96) 100%)',
              }}
            />

            <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-6 pb-10 pt-28 sm:px-10 lg:px-14 lg:pb-14 lg:pt-32">
              <div className="grid flex-1 grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Primary Editorial Links */}
                <ul className="space-y-2 sm:space-y-3 lg:col-span-8">
                  {NAVIGATION_ITEMS.map((item, idx) => {
                    const active = isRouteActive(item.to);
                    const dimmed = hoveredIndex !== null && hoveredIndex !== item.index;

                    return (
                      <motion.li
                        key={item.index}
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                        transition={{
                          duration: prefersReducedMotion ? 0.1 : 0.55,
                          delay: prefersReducedMotion ? 0 : 0.08 + idx * 0.055,
                          ease: CINEMA_EASE,
                        }}
                      >
                        <Link
                          ref={idx === 0 ? firstLinkRef : undefined}
                          to={item.to}
                          onClick={(event) => handleNavClick(event, item.to)}
                          onMouseEnter={() => setHoveredIndex(item.index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`group flex items-baseline gap-4 border-b border-ivory/10 py-3.5 transition-all duration-500 sm:gap-7 sm:py-4 ${
                            dimmed ? 'opacity-35' : 'opacity-100'
                          }`}
                        >
                          <span className="font-mono text-xs tracking-editorial text-taupe">
                            {item.index}
                          </span>
                          <span
                            className={`font-editorial text-3xl font-light tracking-tight transition-transform duration-500 ease-cinema group-hover:translate-x-3 sm:text-5xl lg:text-6xl ${
                              active ? 'italic text-cream' : 'text-ivory'
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="ml-auto hidden text-xs tracking-wide text-taupe transition-colors duration-300 group-hover:text-ivory md:inline-block">
                            {item.subtitle}
                          </span>
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-taupe opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ivory group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Editorial Brand & Channels Column */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.1 : 0.65,
                    delay: prefersReducedMotion ? 0 : 0.28,
                    ease: CINEMA_EASE,
                  }}
                  className="flex flex-col justify-between gap-10 border-t border-ivory/10 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
                      Philosophy
                    </p>
                    <p className="mt-4 font-editorial text-2xl font-light italic leading-snug text-ivory sm:text-3xl">
                      “{BRAND.centralThought}”
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-taupe">{BRAND.tagline}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
                      Official Channels
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={SOCIAL_LINKS.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between border border-ivory/15 px-4 py-3 text-xs uppercase tracking-editorial text-ivory/85 transition-colors hover:border-ivory/50 hover:text-cream"
                      >
                        <span className="inline-flex items-center gap-3">
                          <InstagramIcon className="h-4 w-4 text-taupe group-hover:text-ivory" />
                          Instagram
                        </span>
                        <span className="font-mono text-[11px] normal-case tracking-normal text-taupe">
                          {SOCIAL_LINKS.instagram.handle}
                        </span>
                      </a>

                      <a
                        href={SOCIAL_LINKS.youtube.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between border border-ivory/15 px-4 py-3 text-xs uppercase tracking-editorial text-ivory/85 transition-colors hover:border-ivory/50 hover:text-cream"
                      >
                        <span className="inline-flex items-center gap-3">
                          <YouTubeIcon className="h-4 w-4 text-taupe group-hover:text-ivory" />
                          YouTube
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-taupe group-hover:text-ivory" />
                      </a>

                      <a
                        href={SOCIAL_LINKS.whatsapp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between border border-ivory/15 px-4 py-3 text-xs uppercase tracking-editorial text-ivory/85 transition-colors hover:border-ivory/50 hover:text-cream"
                      >
                        <span className="inline-flex items-center gap-3">
                          <WhatsAppIcon className="h-4 w-4 text-taupe group-hover:text-ivory" />
                          WhatsApp
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-taupe group-hover:text-ivory" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <AttendEpisodeButton variant="outline" className="w-full" />
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-col justify-between gap-2 border-t border-ivory/10 pt-6 font-mono text-[11px] tracking-wider text-taupe sm:flex-row sm:items-center">
                <span>{BRAND.tagline}</span>
                <span>Press ESC to close</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
