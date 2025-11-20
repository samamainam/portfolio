/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#001C27",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 18px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
