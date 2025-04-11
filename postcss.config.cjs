// module.exports = {
//   darkMode: 'class', // atau 'media' tergantung preferensi
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: { extend: {} },
//   plugins: [
//     require('@tailwindcss/postcss'),
//     require('autoprefixer'),
//   ],
// }
  
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),
    require('autoprefixer'),
  ]
}

