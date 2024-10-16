/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22c55e",
        dark: "#0f172a",
        secondary: "#64748b",
        light: "#ffff",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
