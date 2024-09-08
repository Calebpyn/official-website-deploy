/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "navbar-bp": "1115px",
      },
      colors: {
        "title-blue": "#072C4F",
        "secondary-yellow": "#FDB42D",
        "secondary-yellow-2": "#FFC252",
      },
    },
  },
  plugins: [],
};
