/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      my_red: "#ff595e",
      my_yellow: "ffca3a",
      my_green: "#8ac926",
      my_blue: "#1982c4",
      my_purple: "#6a4c93",
    },
    extend: {
      fontFamily: {
        oi: ["Oi"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
