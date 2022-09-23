/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        nlwGradient: 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #e1D55d 100%)',
        gameGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
