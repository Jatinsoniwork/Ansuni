import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_CONTENT, EDITORIAL_IMAGES } from '../../data/editorial';
import { CINEMA_EASE, HairlineRule, Reveal } from '../ui/Reveal';

/**
 * Section 7: About ANSUNI (Homepage Editorial Section)
 */
export function AboutSection() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.08, 1]);

  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-midnight py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <HairlineRule />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Statement & Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                01 / {ABOUT_CONTENT.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id="about-heading"
                className="mt-6 font-editorial text-4xl font-light leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-6xl"
              >
                Some stories are heard.{' '}
                <span className="italic text-cream">Some remain ANSUNI.</span>
              </h2>
            </Reveal>

            <div className="mt-10 max-w-2xl space-y-6 text-base font-light leading-[1.85] text-ivory/80 sm:text-lg">
              {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                <Reveal key={idx} delay={0.14 + idx * 0.07}>
                  <p
                    className={
                      idx === 1 || idx === ABOUT_CONTENT.paragraphs.length - 1
                        ? 'font-editorial text-2xl font-normal italic leading-snug text-cream sm:text-[1.7rem]'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.42} className="mt-12">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 border-b border-ivory/35 pb-2 text-xs uppercase tracking-editorial text-ivory transition-colors duration-300 hover:border-cream hover:text-cream"
              >
                <span>Read the Full Story</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-400 ease-cinema group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          {/* Right Atmospheric Studio Frame */}
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal delay={0.2}>
              <div
                ref={imageContainerRef}
                className="relative aspect-[4/3] overflow-hidden border border-ivory/10 bg-charcoal"
              >
                <motion.img
                  style={{ scale: imgScale }}
                  transition={{ ease: CINEMA_EASE }}
                  src={EDITORIAL_IMAGES.aboutStudio.src}
                  alt={EDITORIAL_IMAGES.aboutStudio.alt}
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[0.75]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/75 via-transparent to-midnight/25"
                />
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ivory/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-editorial text-taupe">
                  The Listening Room
                </span>
                <span className="font-editorial text-sm italic text-ivory/70">
                  Quiet space for honest voices
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
