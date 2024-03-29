/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-opacity-50": "rgba(255, 255, 255, 0.5)",
        "black-opacity-60": "rgba(28, 27, 26, 0.6)",
        primary: "rgb(240, 187, 18)",
        second: "rgb(255, 202, 35)",
        "gray-80": "rgb(73, 80, 87)",
        "gray-50": "rgb(173, 181, 189)",
        "gray-40": "rgb(240, 242, 243)",
        "gray-10": "rgb(244, 246, 247)",
        footer: "rgb(233, 236, 239)",
        blue: "rgb(0, 122, 255)",
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
      "move-right": "move-right 2s ease-out",
      "move-left": "move-left 2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
