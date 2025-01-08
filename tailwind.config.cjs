/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oi: ["Oi"],
        average_sans: ["Average Sans"],
        // Add more custom font families as needed
      },
      colors: {
        my_red: "#ff595e",
        my_yellow: "ffca3a",
        my_green: "#8ac926",
        my_blue: "#1982c4",
        my_purple: "#6a4c93",
      },
    },
  },
  plugins: [],
};
