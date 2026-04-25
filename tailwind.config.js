/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
      },

      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0) 50%), linear-gradient(141.27deg, rgba(16, 185, 129, 0) 50%, rgba(16, 185, 129, 0.08) 100%)",
      },
    },
  },
  plugins: [],
};
