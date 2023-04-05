/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        turquoise: '#73fff7',
      },
      // custom css properties set in src/components/styled/baseStyles.js
      backgroundColor: {
        primary: 'var(--bg-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        dark: 'var(--text-dark)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
