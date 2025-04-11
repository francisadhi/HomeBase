// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class', // wajib untuk toggle manual
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   // plugins: {
//   //   '@tailwindcss/postcss': {},
//   //   autoprefixer: {},
//   // },
//   plugins: [
//     require('@tailwindcss/forms'),
//     // require plugin lain di sini kalau perlu
//   ],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // atau 'media' tergantung preferensi
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'md': '768px', // Ensure this exists
    },
  },
  plugins: [], // kosongkan di sini kalau tidak pakai plugin Tailwind tambahan
}