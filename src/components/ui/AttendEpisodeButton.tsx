import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CalendarClock, X } from 'lucide-react';
import { ATTEND_EPISODE_CONFIG, SOCIAL_LINKS } from '../../config/links';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { CINEMA_EASE } from './Reveal';

interface AttendEpisodeButtonProps {
  variant?: 'outline' | 'ghost' | 'text';
  className?: string;
  label?: string;
}

/**
 * Configurable "Attend an Episode" CTA.
 *
 * - If `ATTEND_EPISODE_CONFIG.googleFormUrl` is set, opens the Google Form directly.
 * - While `null` (not yet configured), opens an honest editorial notice modal
 *   rather than linking to a fake or broken URL.
 */
export function AttendEpisodeButton({
  variant = 'outline',
  className = '',
  label = 'Attend an Episode',
}: AttendEpisodeButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const formUrl = ATTEND_EPISODE_CONFIG.googleFormUrl;

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const variantClasses = {
    outline:
      'inline-flex items-center justify-center gap-3 border border-ivory/35 px-7 py-3.5 text-xs uppercase tracking-editorial text-ivory transition-all duration-500 ease-cinema hover:border-ivory hover:bg-ivory hover:text-midnight',
    ghost:
      'inline-flex items-center gap-2.5 text-xs uppercase tracking-editorial text-ivory/85 transition-colors duration-300 hover:text-cream',
    text: 'inline-flex items-center gap-2 text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory',
  }[variant];

  if (formUrl) {
    return (
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variantClasses} ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={`${variantClasses} ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
      </button>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="attend-episode-modal-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/85 px-6 py-8 backdrop-blur-md"
                onClick={() => setModalOpen(false)}
              >
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: prefersReducedMotion ? 0.1 : 0.45, ease: CINEMA_EASE }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative w-full max-w-lg border border-ivory/20 bg-charcoal p-8 sm:p-10"
                >
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close registration notice"
                    className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center border border-ivory/15 text-taupe transition-colors hover:border-ivory/50 hover:text-ivory"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="mb-6 flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-editorial text-taupe">
                    <CalendarClock className="h-3.5 w-3.5 text-ivory/75" aria-hidden="true" />
                    <span>{ATTEND_EPISODE_CONFIG.statusLabel}</span>
                  </div>

                  <h3
                    id="attend-episode-modal-title"
                    className="font-editorial text-3xl font-light tracking-tight text-cream sm:text-4xl"
                  >
                    Attend a Live Recording
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-ivory/75">
                    {ATTEND_EPISODE_CONFIG.unconfiguredMessage}
                  </p>

                  <div className="mt-5 border-l border-ivory/25 pl-4 font-mono text-[11px] leading-relaxed text-taupe">
                    Destination status: Google Form URL not yet configured. Once added in{' '}
                    <span className="text-ivory/90">src/config/links.ts</span>, this button
                    redirects directly to the form.
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={SOCIAL_LINKS.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2.5 bg-ivory px-5 py-3 text-xs uppercase tracking-editorial text-midnight transition-opacity hover:opacity-90"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2.5 border border-ivory/30 px-5 py-3 text-xs uppercase tracking-editorial text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      <span>Follow Instagram</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
