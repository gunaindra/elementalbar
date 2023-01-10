/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey: "#D2D1CF",
        darkGrey: "#2C2C2C",
        black: "#050505",
        darkGreen: "#383C2E",
        brown: "#7E552B",
      },
    },
  },
  plugins: [],
};
