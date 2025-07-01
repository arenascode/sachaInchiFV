/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["BrownSugar", "sans-serif"],
      },
      colors: {
        primary: "#1b4d20", // Deep green
        accent: "#f6ba02", // Gold
        highlight: "#ffde59", // Bright yellow
        softGreen: "#c4d7b2", // Light green
        beige: "#b3a86d", // Earthy beige
        darkGreen: "#163020", // Darker green
        cream: "#fff9f0", // Cream white
        //new Palette
        cerulean: "#007BA7",
        navyBlue: "#002D62",
        powderBlue: "#B0E0E6",
        iceBlue: "#E0F7FA"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

