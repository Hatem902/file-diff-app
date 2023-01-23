/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        bgDefault: '#FFFFFF',
        textDefault: '#37352f',
        selectDefault: '#CECDCA',
        bgSecondary: 'rgb(251, 251, 250)',
        bgMild: 'rgb(156,163,175)',
        bgSelected: 'rgba(35, 131, 226, 0.28)',
        bgHover: 'rgba(35, 131, 226, 0.50)',
        textSecondary: '#19171199',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
