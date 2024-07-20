/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-custom': 'hsl(47,88%, 63%)',
        'White-custom': 'hsl(0, 0%, 100%)',
        'Gray-500-custom': 'hsl(0, 0%, 42%)',
        'Gray-950-custom': 'hsl(0, 0%, 7%)'
      },
      fontSize: {
        'para-custom': '16px'
      },
      fontFamily: {
        "display": ["poppins", "sans-serif"],
        "body": ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};