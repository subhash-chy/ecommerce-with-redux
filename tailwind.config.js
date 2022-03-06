const colors = require("./constants/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.accent,
        placeholder: colors.placeholder,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
