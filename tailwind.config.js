/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-opacity-50": "rgba(255, 255, 255, 0.5)",
        primary: "rgb(240, 187, 18)",
        second: "rgb(255, 202, 35)",
        footer: "rgb(233, 236, 239)",
        blue: "rgb(0,122,255)",
      },
      height: {},
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      rutenia: ["Rutenia", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animated")],
};
