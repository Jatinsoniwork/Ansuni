import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT, HERO_PORTRAITS } from '../../data/editorial';
import { CINEMA_EASE } from '../ui/Reveal';

interface HeroSectionProps {
  ready?: boolean;
}

/**
 * Section 6: Homepage — Hero Section
 *
 * Hybrid editorial experience combining large warm-ivory literary typography,
 * diverse chiaroscuro human portraits emerging from Midnight Black,
 * gentle transitions, and a clear "EXPLORE ANSUNI" CTA.
 */
export function HeroSection({ ready = true }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 64]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, prefersReducedMotion ? 1 : 0.15]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PORTRAITS.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const activePortrait = HERO_PORTRAITS[activeIndex];

  const handleExplore = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="ANSUNI Introduction"
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight pt-24 lg:pt-28"
    >
      {/* Subtle ambient depth */}
      <div aria-hidden="true" className="ansuni-vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 pb-16 pt-6 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-14 lg:pb-24">
        {/* Left Editorial Typography Stage */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-20 order-2 flex flex-col items-start lg:order-1 lg:col-span-7"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.1, ease: CINEMA_EASE }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-ivory/45" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-taupe">
              {HERO_CONTENT.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 1.0, delay: 0.2, ease: CINEMA_EASE }}
            className="mt-7 font-editorial text-[2.75rem] font-light leading-[1.06] tracking-tight text-ivory sm:text-6xl md:text-[4.25rem] xl:text-[5.25rem]"
          >
            Every Story Has a Side That{' '}
            <span className="italic text-cream">Remains Unheard.</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, delay: 0.36, ease: CINEMA_EASE }}
            className="mt-7 max-w-lg text-base font-light leading-relaxed tracking-wide text-taupe sm:text-lg"
          >
            {HERO_CONTENT.tagline}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, delay: 0.48, ease: CINEMA_EASE }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <button
              type="button"
              onClick={handleExplore}
              className="group inline-flex items-center gap-4 border border-ivory/45 bg-ivory px-8 py-4 text-xs font-medium uppercase tracking-editorial text-midnight transition-all duration-500 ease-cinema hover:bg-cream"
            >
              <span>{HERO_CONTENT.ctaLabel}</span>
              <ArrowDown
                className="h-3.5 w-3.5 transition-transform duration-500 ease-cinema group-hover:translate-y-1"
                aria-hidden="true"
              />
            </button>

            <span className="hidden font-mono text-[11px] uppercase tracking-editorial text-taupe/75 sm:inline-block">
              Season 01 · Unheard Perspectives
            </span>
          </motion.div>

          {/* Diverse Perspectives Selector */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: CINEMA_EASE }}
            className="mt-14 flex w-full max-w-md flex-col gap-3 border-t border-ivory/10 pt-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3" role="tablist" aria-label="Featured human portraits">
                {HERO_PORTRAITS.map((portrait, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={portrait.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View ${portrait.caption}: ${portrait.perspective}`}
                      onClick={() => setActiveIndex(idx)}
                      className="group flex items-center gap-2 py-1 text-left"
                    >
                      <span
                        className={`font-mono text-[11px] tracking-editorial transition-colors duration-300 ${
                          isActive ? 'text-ivory' : 'text-taupe/55 group-hover:text-ivory/80'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`block h-px transition-all duration-500 ease-cinema ${
                          isActive ? 'w-8 bg-ivory' : 'w-3 bg-ivory/20 group-hover:bg-ivory/45'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <span className="font-mono text-[10px] uppercase tracking-editorial text-taupe/70">
                {activePortrait.caption}
              </span>
            </div>

            <p className="min-h-[1.25rem] font-editorial text-base italic text-ivory/75">
              {activePortrait.perspective}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Chiaroscuro Portrait Composition */}
        <motion.div
          style={{ y: portraitY }}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.2, delay: 0.22, ease: CINEMA_EASE }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-midnight">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePortrait.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 1.15, ease: CINEMA_EASE }}
                className="absolute inset-0"
              >
                <img
                  src={activePortrait.src}
                  alt={activePortrait.alt}
                  className="h-full w-full object-cover object-top saturate-[0.72] contrast-[1.04]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Seamless Midnight Black edge blending so portraits emerge from darkness */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.22) 24%, transparent 55%, rgba(0,0,0,0.45) 100%)',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, #000000 0%, transparent 18%, transparent 82%, #000000 100%)',
              }}
            />

            {/* Minimal hairline architectural corner accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 border border-ivory/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
