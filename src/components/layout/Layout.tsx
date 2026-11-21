import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  navVisible?: boolean;
}

export function Layout({ children, navVisible = true }: LayoutProps) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }, 120);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash, prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-midnight text-ivory">
      {/* Skip link for keyboard & screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[120] focus:border focus:border-ivory focus:bg-midnight focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-editorial focus:text-ivory"
      >
        Skip to content
      </a>

      {/* Subtle tactile analog grain overlay */}
      <div className="ansuni-grain" aria-hidden="true" />

      <Navigation visible={navVisible} />

      <main id="main-content" className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
