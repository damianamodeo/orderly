/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primaryLight": "#724baa",
        "primary": "#5c3c88",
        "primaryDark": "#432c63",
        "secondaryLight": "#6787bc",
        "secondary": "#4a6da7",
        "secondaryDark": "#3a5683",
        "bgLight": "#f2f2f2",
        "bg": "#d2d2d2",
        "bgDark": "#b2b2b2",
        "test": "#5c3c88",
      }
    },
  },
  plugins: [],
}
