/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '800px',
      'lg': '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "neutral-2": "#F2F2F3",
        "neutral-8": "#88898E"
      },
      width: {
        'sidebar': '235px',
        'logo': '110px',
        'searchBar': '392px',
      },
    },
  },
  plugins: [],
}
