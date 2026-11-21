import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { CINEMA_EASE } from '../ui/Reveal';
import introSvgRaw from './ansuni-intro-animated.svg?raw';

interface CinematicIntroProps {
  onComplete: () => void;
}

/**
 * Section 4: Opening Experience — Cinematic Logo Intro ("7 Voices Reveal")
 *
 * - Strict full-vector 7-Voices SVG reveal animation (4.8s master timeline).
 * - Contour light tracers sketch the 7 profile silhouettes (E1–E7).
 * - Precision sliding masks smoothly uncover the warm ivory fills.
 * - Stylized editorial letters S, U, n, i rise from the floorline.
 * - Circular dot over 'i' blooms and seals the identity.
 * - Completely black canvas (#000000) with atmospheric light breathe.
 * - Subtle cursor-tracking magnetic parallax.
 * - Seamless automatic transition into the homepage on completion.
 * - Accessible "Skip intro" button and `prefers-reduced-motion` bypass.
 */
export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<'playing' | 'settled' | 'exit'>('playing');
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 26, mass: 0.8 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 26, mass: 0.8 });

  const finishIntro = useCallback(() => {
    setVisible(false);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) {
      finishIntro();
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 4.8s SVG SMIL animation finishes -> brief settle -> smooth exit crossfade
    const settleTimer = window.setTimeout(() => setPhase('settled'), 4800);
    const exitTimer = window.setTimeout(() => setPhase('exit'), 5300);
    const doneTimer = window.setTimeout(() => {
      document.body.style.overflow = prevOverflow;
      finishIntro();
    }, 5950);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === ' ') {
        window.clearTimeout(settleTimer);
        window.clearTimeout(exitTimer);
        window.clearTimeout(doneTimer);
        document.body.style.overflow = prevOverflow;
        finishIntro();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [finishIntro, prefersReducedMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const normX = (event.clientX / window.innerWidth - 0.5) * 20;
    const normY = (event.clientY / window.innerHeight - 0.5) * 14;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="presentation"
          aria-label="ANSUNI opening sequence"
          onPointerMove={handlePointerMove}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: CINEMA_EASE }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-midnight select-none"
        >
          {/* Subtle Warm Ivory atmospheric light glow behind the animation */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'exit' ? 0 : 0.85,
              scale: phase === 'settled' ? 1.05 : 1,
            }}
            transition={{ duration: 2.2, ease: CINEMA_EASE }}
            style={{
              x: smoothX,
              y: smoothY,
              background:
                'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(243, 230, 216, 0.08) 0%, rgba(23, 23, 23, 0.03) 50%, rgba(0, 0, 0, 0) 80%)',
            }}
            className="pointer-events-none absolute inset-0"
          />

          {/* Master 7-Voices Reveal Animated SVG */}
          <motion.div
            ref={containerRef}
            style={{ x: smoothX, y: smoothY }}
            initial={{ opacity: 1, scale: 0.98 }}
            animate={
              phase === 'exit'
                ? { opacity: 0, scale: 0.95, y: -20, filter: 'blur(3px)' }
                : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{
              duration: phase === 'exit' ? 0.65 : 0.8,
              ease: CINEMA_EASE,
            }}
            className="relative z-10 flex w-full max-w-[1560px] items-center justify-center px-6 sm:px-12 md:px-16 [&>svg]:block [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: introSvgRaw }}
          />

          {/* Accessible, unobtrusive Skip Intro control */}
          <button
            type="button"
            onClick={finishIntro}
            aria-label="Skip introductory animation"
            className="fixed bottom-6 right-6 z-20 rounded-full border border-taupe/20 bg-charcoal/50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-editorial text-taupe/70 backdrop-blur-sm transition-all duration-300 hover:border-ivory/50 hover:bg-charcoal hover:text-ivory focus:border-ivory focus:text-ivory focus:outline-none"
          >
            Skip intro <span className="opacity-50">[Esc]</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
