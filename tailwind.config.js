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
        'marigold': '#FD823E',
        'ghostwhite': '#FFFFFF',
        'panther': '#1E1F1C',
        'cool-gray': '#606060'
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
