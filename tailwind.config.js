/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: {
          DEFAULT: '#faf9f4',
          dark: '#0a0a0a',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#1a1a1a',
        },
        yellow: {
          pastel: '#F5E6A3',
          active: '#E8D88E',
        },
        pink: {
          hot: '#FF3CAC',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.18)',
        'card-light': '0 18px 50px rgba(40, 32, 24, 0.12)',
      },
      keyframes: {
        'hue-rotate': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(60deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'hue-rotate': 'hue-rotate 12s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
