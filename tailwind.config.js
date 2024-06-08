/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        "display": ["poppins", "sans-serif"],
        "body": ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}