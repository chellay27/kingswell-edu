import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22382c',
          light: '#2d4a3a',
          dark: '#1a2b22',
        },
        accent: {
          DEFAULT: '#C9A227',
          hover: '#D4AF37',
          light: '#F5E6B3',
        },
        cream: '#F5F1E8',
        border: '#E5E0D5',
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#5A5A5A',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'gold': '0 4px 20px rgba(201, 162, 39, 0.25)',
        'gold-lg': '0 8px 32px rgba(201, 162, 39, 0.35)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'pill': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-slow': 'fadeUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(201, 162, 39, 0.25)' },
          '50%': { boxShadow: '0 4px 30px rgba(201, 162, 39, 0.45)' },
        },
        slideInRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
