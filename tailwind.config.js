/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-white": "#ffffff",
        "portfolio-gray": "#808080",
        "portfolio-navy": "#031926",
        "portfolio-cyan": "#8fe8fa",
        "portfolio-dark": "#171717",
        "portfolio-green": "#2bf38b",
        "slime-green": "#84cc16",
      },
      fontSize: {
        "portfolio-h1": "clamp(1.25rem, 3vw + 1rem, 3rem)",
        "portfolio-h2": "clamp(1rem, 1.5vw + 0.75rem, 2rem)",
        "portfolio-h3": "clamp(0.75rem, 1vw + 0.5rem, 1.25rem)",
        "portfolio-text": "clamp(0.75rem, 1vw + 0.25rem, 1rem)",
      },
      width: {
        "icon-l": "50px",
        "icon-s": "30px",
        hero: "clamp(100px, 200px, 300px)",
      },
      height: {
        "icon-l": "50px",
        "icon-s": "30px",
        hero: "clamp(100px, 200px, 300px)",
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(1turn)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        lunasima: ["Lunasima", "sans-serif"],
      },
      borderWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
