/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: '#181818',
        black2: '#1C1C1C',
        purple1: '#312EB5',
      }
    },
  },
  plugins: [],
}