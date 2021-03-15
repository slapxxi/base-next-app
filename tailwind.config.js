const colors = require('tailwindcss/colors');

module.exports = {
  important: false,
  mode: 'layers',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: { ...colors },
  },
  variants: {},
  plugins: [],
};
