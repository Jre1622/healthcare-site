/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EBF3FA",
          100: "#D6E6F5",
          200: "#BAD3EC",
          500: "#7BA7D9" /* Primary Action */,
          600: "#5A8FB8",
          700: "#477294",
          900: "#3A5A78" /* Overlay */,
        },
        gray: {
          50: "#FDFBF8" /* Very light warm cream */,
          100: "#F9F5F0" /* Warm cream - for light backgrounds */,
          200: "#F2EDE7",
          300: "#EAE0D6" /* Light beige - for subtle text, borders */,
          400: "#D5C8BA" /* Medium beige - for less important text */,
          600: "#8D7B6D" /* Soft brown - for body text */,
          700: "#6B5B4E" /* Medium brown - for footer, darker text */,
          800: "#4A3F35" /* Dark brown - for headings */,
        },
        white: "#FFFCFA" /* Soft off-white */,
      },
    },
  },
  plugins: [],
};
