/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundApp: '#E7E7E7',
        lightBlue: '#2F8EC6'
      },
      width: {
        32: '8.25rem'
      },
    },
  },
  plugins: [],
}
