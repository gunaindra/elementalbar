const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontSize: {
        menu: ["25pt", { lineHeight: "27pt" }],
        heading: ["30pt", { lineHeight: "46pt" }],
        CTANavbar: ["50pt", { lineHeight: "53pt" }],
        ...defaultTheme.fontSize,
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
      },
    },
  },
  plugins: [],
};
