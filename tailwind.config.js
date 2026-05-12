/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#4C1D95',
        },
        lime: {
          DEFAULT: '#A3E635',
          dark: '#65A30D',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          card: '#12121A',
          border: '#1E1E2E',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}