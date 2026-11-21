import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CINEMA_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.85,
  y = 26,
  className = '',
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration, delay, ease: CINEMA_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HairlineRuleProps {
  className?: string;
  delay?: number;
}

export function HairlineRule({ className = '', delay = 0 }: HairlineRuleProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={`h-px w-full bg-ivory/15 ${className}`} aria-hidden="true" />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0, delay, ease: CINEMA_EASE }}
      style={{ transformOrigin: 'left center' }}
      className={`h-px w-full bg-ivory/15 ${className}`}
      aria-hidden="true"
    />
  );
}
