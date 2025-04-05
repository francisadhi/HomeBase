/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // wajib untuk toggle manual
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}