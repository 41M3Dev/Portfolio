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
        brand: {
          bg: '#F8F8F8',
          card: '#FFFFFF',
          border: '#E5E5E5',
          text: '#1A1A1A',
          muted: '#6B7280',
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