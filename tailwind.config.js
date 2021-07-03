const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sml-white': '#FFFFFF',
        'sml-dark': '#372C2E',
        'sml-dim': '#563727',
        'sml-coffee': '#7A431D',
        'sml-mocha': '#DE9E48',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  variants: {
    opacity: ['disabled'],
  },
  plugins: [],
}
