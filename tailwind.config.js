const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./apps/**/*.{html,ts,tsx}', './libs/**/*.{html,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '360px',
      md: '720px',
      lg: '1480px',
      xl: '1980px',
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradlin-1': 'var(--gradlin-1)',
        'gradlin-2': 'var(--gradlin-2)',
        'gradrad-1': 'var(--gradrad-1)',
        'gradrad-2': 'var(--gradrad-2)',
        'gradrad-3': 'var(--gradrad-3)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        background: 'var(--background)',
        'background-transparent': 'var(--background-transparent)',
        black: 'var(--black)',
        blueIce: {
          100: 'var(--blueIce-100)',
          200: 'var(--blueIce-200)',
          300: 'var(--blueIce-300)',
          400: 'var(--blueIce-400)',
          500: 'var(--blueIce-500)',
          600: 'var(--blueIce-600)',
          700: 'var(--blueIce-700)',
          800: 'var(--blueIce-800)',
          900: 'var(--blueIce-900)',
        },
        border: 'var(--border)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        ring: 'var(--ring)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        white: 'var(--white)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
