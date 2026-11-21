import { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { CinematicIntro } from './components/intro/CinematicIntro';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SeasonOnePage } from './pages/SeasonOnePage';
import { BecomeAGuestPage } from './pages/BecomeAGuestPage';
import { ContactPage } from './pages/ContactPage';
import { CINEMA_EASE } from './components/ui/Reveal';

const INTRO_SESSION_KEY = 'ansuni_intro_played_v1';

function PageTransition({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: CINEMA_EASE }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes({ introDone }: { introDone: boolean }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage introDone={introDone} />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/season-01"
          element={
            <PageTransition>
              <SeasonOnePage />
            </PageTransition>
          }
        />
        <Route
          path="/become-a-guest"
          element={
            <PageTransition>
              <BecomeAGuestPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return false;
    try {
      return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1';
    } catch {
      return true;
    }
  });

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
        <Layout navVisible={!showIntro}>
          <AppRoutes introDone={!showIntro} />
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
