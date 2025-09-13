/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50:  "#fdfbf7",   // lightest beige
          100: "#f8f4ec",
          200: "#efe4d3",
          300: "#e6d4bb",
          400: "#d8bfa0",
          500: "#c7a67d",   // main beige
          600: "#a8875f",
          700: "#866947",
          800: "#5c4630",
          900: "#3a2a1d",   // darkest
        },
        brand: {
          DEFAULT: "#7B4B2A", // brown accent
          light: "#A66E48",
          dark: "#5A3520",
        }
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
}

