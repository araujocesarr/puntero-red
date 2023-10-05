/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./images/illustration.svg')",
      },
      colors: {
        "midnight-blue-100": "#02073e",
        "midnight-blue-200": "#000634",
        "first-gray": "#566272",
        crimson: "#d82929",
        "gray-background": "#f9fafc",
        "graysmoke-200": "#f0f0f0",
        "lategray-100": "#4b4b4b",
        "lategray-300": "#2c2f2e",
        lightseagreen: "#00a99d",
        "gray-200": "#0f2137",
        "aliceblue-100": "#ecf2f6",
        "slate-gray": "#738295",
        "whitesmoke-100": "#f9fafc",
      },
      fontFamily: {
        arvo: ["arvo", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
