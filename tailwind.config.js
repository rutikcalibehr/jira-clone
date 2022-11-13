/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-main": "#0052cc",
      "primary-light": "#deebff",
      "primary-main-hover": "#005ce6",
      "primary-light-hover": "#c5dcff",
      "secondary-main": "#403294",
      "secondary-light": "#EAE6FF",
      "white": "#fff",
      "black": "#000",
      "transparent": "transparent",
      "focus": "#4c9aff",
      "success-main": "#00875A",
      "sucess-hover": "#00a16b",
      "warn-main": "#FFAB00",
      "error-main": "red",
      "error-light": "#ffe5e5",
      "error-dark": "#b30000",
      "error-hover": "#fdd8d8",
      "grey-100": "#fafbfc",
      "grey-200": "#f4f5f7",
      "grey-300": "#ebecf0",
      "grey-400": "#e0e1e6",
      "grey-500": "#dddddd",
      "grey-600": "#d3d3d3",
      "font-main": "#172b4d",
      "font-light": "#5e6c84",
      "font-grey": "#676767",
      "font-success-main": "#006644",
      "font-success-light": "#E3FCEF",
      "icon": "#344563",
    },
    fontFamily: {
      "primary-light": ["CircularStdLight", "sans-serif"],
      "primary": ["CircularStdMedium", "sans-serif"],
      "primary-bold": ["CircularStdBold", "sans-serif"],
      "primary-black": ["CircularStdBlack", "sans-serif"],
    },
    boxShadow: {
      "xs": "rgba(0,0,0, 0.2) 0px 1px 1px, rgba(0,0,0, 0.2) 0px 0px 1px",
      "md": "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
      "lg": "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px",
      "blue": "5px 5px 20px 1px rgba(0, 82, 204, 0.2)",
      "dialog-overlay": "rgba(0,0,0,0.45)",
    },
    extend: {
      fontSize: {
        "2xs": ["0.75rem", "1rem"],
        "xs": ["0.8125rem", "1rem"],
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}