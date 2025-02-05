/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#6366F1", // Customize primary color
        secondary: "#EC4899",
      },
      animation: {
        diagonal: 'slideDiagonal 1.5s ease-out',
        slideFromTop: 'slideFromTop 1s ease-out forwards',
        fadeIn: "fadeIn 1s ease-in-out",
        rotateSlow: "rotate 10s linear infinite",
      },
      keyframes: {
        slideFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDiagonal: {
          '0%': {
            opacity: '0',
            transform: 'translate(100px, -100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0, 0)',
          },
  
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  darkMode: "class", // Enables dark mode switching
  plugins: [],
};
