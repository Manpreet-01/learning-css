/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate_300: 'hsl(212, 45%, 89%)',
        // Slate_500: 'hsl(216, 15%, 48%)',
        // Slate_900: 'hsl(218, 44%, 22%)',
        Green: 'hsl(75, 94%, 57%)',
        White: 'hsl(0, 0%, 100%)',
        Grey_700: 'hsl(0, 0%, 20%)',
        Grey_800: 'hsl(0, 0%, 12%)',
        Grey_900: 'hsl(0, 0%, 8%)',
      },
      fontSize: {
        'para': '15px'
      },
      fontWeight: {
        thin_400: 400,
        med_600: 600,
        thick_700: 700,
      },
      fontFamily: {
        "display": ["poppins", "sans-serif"],
        "body": ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};