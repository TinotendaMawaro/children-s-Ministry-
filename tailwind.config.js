/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: '#FF6B6B',
          yellow: '#FFD166',
          green: '#06D6A0',
          blue: '#118AB2',
          purple: '#8338EC',
          softBg: '#FFF9F5',
          darkNavy: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
