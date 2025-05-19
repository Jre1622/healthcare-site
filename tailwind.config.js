/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#F0F6FA",
          100: "#E0EFF5",
          200: "#C9E2EE",
          500: "#659DBD",
          600: "#5087A8",
          700: "#3E708F",
          900: "#2C5573",
        },
        gray: {
          50: "#FDFBF8",
          100: "#F9F5F0",
          200: "#F2EDE7",
          300: "#EAE0D6",
          400: "#D5C8BA",
          600: "#8D7B6D",
          700: "#6B5B4E",
          800: "#4A3F35",
        },
        white: "#FFFCFA",
      },
    },
  },
  plugins: [],
};
