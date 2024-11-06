module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./docs/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f25454",
        secondary: "#727180",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
