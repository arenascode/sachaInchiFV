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
        sand: "#F4E3C1",
        warmSandy: "#E6D3B3",
        goldenSand: "#CBAE82",
        sandStone: "#D4BFAA",
        darkGreen: "#163020", // Darker green
        cream: "#fff9f0", // Cream white
        //new Palette
        cerulean: "#007BA7",
        navyBlue: "#002D62",
        powderBlue: "#B0E0E6",
        iceBlue: "#E0F7FA",
        earthyGreen: "#3A725F",
      },
      backgroundImage: {
        "cerulean-navy": "linear-gradient(45deg, #002D62 0%, #007BA7 100%)",
        "cerulean-navy-soft":
          "linear-gradient(45deg, #0A3D62 0%, #5CA8D6 100%)",
        "cerulean-navy-soft-top-bottom":
          "linear-gradient(180deg, #0A3D62 0%, #5CA8D6 100%)",
        "navy-gradient": "linear-gradient(45deg, #002D62 0%, #001634 100%)",
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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

