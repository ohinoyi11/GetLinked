/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColors: {
        "light-purple": "#D434FE",
      },
      fontFamily: {
        clashbold: ["ClashDisplay-Bold"],
        montserrat: ["Montserrat-Black"],
      },
    },
  },
  plugins: [],
};
