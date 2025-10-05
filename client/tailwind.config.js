const { error } = require('console')
const palette = require('./src/design/palette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: palette.primary,
        },
        dark: palette.dark,
        grey: palette.grey,
        background: palette.background
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: [],
}
