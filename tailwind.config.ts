import type { Config } from 'tailwindcss';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: Config = {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*.{ts,tsx}'),
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ANSUNI Official Colour Palette (Strictly Enforced)
        midnight: '#000000',
        ivory: '#F3E6D8',
        'ivory-alt': '#F2E6D7',
        charcoal: '#171717',
        taupe: '#A69A8C',
        cream: '#FAF6EF',
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.18em',
        widest: '0.26em',
      },
      transitionTimingFunction: {
        cinema: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
