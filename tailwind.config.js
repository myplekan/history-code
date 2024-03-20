/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-opacity-50": "rgba(255, 255, 255, 0.5)",
        primary: "rgb(240, 187, 18)",
        second: "rgb(255, 202, 35)",
        "gray-40": "rgb(240, 242, 243)",
        footer: "rgb(233, 236, 239)",
        blue: "rgb(0,122,255)",
      },
      height: {},
      maxWidth: {
        620: "38.75rem",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      rutenia: ["Rutenia", "sans-serif"],
    },
    keyframes: {
      "move-right": {
        "0%": { transform: "translateX(-30rem)" },
        "100%": { transform: "translateX(0)" },
      },
      "move-left": {
        "0%": { transform: "translateX(30rem)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "move-right": "move-right 3s ease-out",
      "move-left": "move-left 3s ease-out",
    },
  },
  plugins: [require("tailwindcss-animated")],
};