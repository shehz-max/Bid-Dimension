export const colors = {
  navyDeep: '#0B1B2E',
  navy: '#1A3A5C',
  blue: '#4A8AB8',
  sky: '#6BA3C9',
  surfaceLight: '#F4F7FA',
  white: '#FFFFFF',
  charcoal: '#1A1A1A',
  gray: '#64748B',
  textLight: '#E8EEF4',
  textMuted: '#8A9BB0',
  borderSubtle: 'rgba(74, 138, 184, 0.12)',
  borderDark: 'rgba(74, 138, 184, 0.20)',
  glow: 'rgba(74, 138, 184, 0.15)',
} as const;

export const gradients = {
  hero: 'linear-gradient(160deg, #0B1B2E 0%, #1A3A5C 55%, #0B1B2E 100%)',
  glow: 'linear-gradient(180deg, transparent 0%, rgba(74, 138, 184, 0.06) 100%)',
  accent: 'linear-gradient(135deg, #4A8AB8 0%, #6BA3C9 100%)',
  cardHover: 'linear-gradient(135deg, rgba(26, 58, 92, 0.8), rgba(74, 138, 184, 0.4))',
} as const;

export const fonts = {
  display: ['var(--font-space-grotesk)', 'Space Grotesk', 'Montserrat', 'Inter', 'sans-serif'],
  body: ['var(--font-inter)', 'Inter', 'DM Sans', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'SF Mono', 'monospace'],
} as const;

export const spacing = {
  'space-1': '4px',
  'space-2': '8px',
  'space-3': '12px',
  'space-4': '16px',
  'space-5': '20px',
  'space-6': '24px',
  'space-8': '32px',
  'space-10': '40px',
  'space-12': '48px',
  'space-16': '64px',
  'space-20': '80px',
  'space-24': '96px',
  'space-32': '128px',
} as const;

export const borderRadius = {
  none: '0px',
  sm: '2px',
  md: '4px',
  lg: '8px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
  md: '0 4px 12px rgba(0, 0, 0, 0.08)',
  'glow-blue': '0 0 24px rgba(74, 138, 184, 0.15)',
  'glow-white': '0 0 20px rgba(255, 255, 255, 0.06)',
} as const;

export const easings = {
  smooth: [0.16, 1, 0.3, 1] as const,
  outExpo: [0.19, 1, 0.22, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  default: 'ease-out' as const,
};

export const durations = {
  instant: 0.15,
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
  ambient: 5.0,
  draw: 2.0,
} as const;
