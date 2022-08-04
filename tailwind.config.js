/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primaryLight": "#744cae",
        "primary": "#5b3c88",
        "primaryD": "#c1a7e2",
        "primaryDark": "#51357b",
        "secondaryLight": "#5a85cd",
        "secondary": "#4a6da7",
        "secondaryD": "#7f9fd3",
        "secondaryDark": "#43639a",
        "bgLight": "#f1f1f1",
        "bg": "#d8d8d8",
        "bgD": "#292929",
        "bgDark": "#c0c0c0",
        "bgDarkD": "#292929",
        "jwGrey": "#626262",
        "jwYellow": "#c48430",
        "jwMaroon": "#942926",
        "jwBlack": "#121212",
      }
    },
  },
  plugins: [],
}
