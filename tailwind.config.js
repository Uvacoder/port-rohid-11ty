const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9fafa",
          100: "#f1f1f2",
          200: "#e7e7e8",
          300: "#d3d4d5",
          400: "#abadaf",
          500: "#7d7f83",
          600: "#52555a",
          700: "#33373d",
          800: "#1d2025",
          900: "#171a1d",
        },
        primary: colors.indigo,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
