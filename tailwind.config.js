/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c5a253',
        'gold-light': '#e6cd86',
        'gold-dark': '#a8893f',
        emerald: {
          deep: '#0f3d2e',
          mid: '#1a5c47',
          light: '#2d8666',
        },
        cream: '#f6f4ec',
        'ink': '#1a2e25',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '0.3em',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '2rem',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
