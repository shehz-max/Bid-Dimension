import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bd-navy-deep': '#0B1B2E',
        'bd-navy': '#1A3A5C',
        'bd-blue': '#4A8AB8',
        'bd-sky': '#6BA3C9',
        'bd-surface-light': '#F4F7FA',
        'bd-white': '#FFFFFF',
        'bd-charcoal': '#1A1A1A',
        'bd-gray': '#64748B',
        'bd-text-light': '#E8EEF4',
        'bd-text-muted': '#8A9BB0',
        'bd-border-subtle': 'rgba(74, 138, 184, 0.12)',
        'bd-border-dark': 'rgba(74, 138, 184, 0.20)',
        'bd-glow': 'rgba(74, 138, 184, 0.15)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'Montserrat', 'Inter', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'SF Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
        md: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'glow-blue': '0 0 24px rgba(74, 138, 184, 0.15)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(160deg, #0B1B2E 0%, #1A3A5C 55%, #0B1B2E 100%)',
        'gradient-glow': 'linear-gradient(180deg, transparent 0%, rgba(74, 138, 184, 0.06) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4A8AB8 0%, #6BA3C9 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, rgba(26, 58, 92, 0.8), rgba(74, 138, 184, 0.4))',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        gridPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.06' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
