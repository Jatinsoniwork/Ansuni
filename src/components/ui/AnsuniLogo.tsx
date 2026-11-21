import { BRAND } from '../../config/brand';

interface AnsuniLogoProps {
  variant?: 'ivory' | 'black';
  className?: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Displays the official ANSUNI logo strictly preserving its original
 * proportions (3840x880 master vector from the updated 7-voices artwork).
 *
 * Uses the pure vector SVG format for crisp rendering at any resolution.
 */
export function AnsuniLogo({
  variant = 'ivory',
  className = 'h-7 w-auto',
  alt = 'ANSUNI',
  loading = 'eager',
}: AnsuniLogoProps) {
  const src =
    variant === 'black' ? BRAND.logos.blackVector : BRAND.logos.ivoryVector;

  return (
    <img
      src={src}
      alt={alt}
      width={3840}
      height={880}
      loading={loading}
      decoding="async"
      draggable={false}
      className={`block select-none object-contain ${className}`}
    />
  );
}
