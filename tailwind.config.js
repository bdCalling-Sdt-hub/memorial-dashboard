/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B278FB",
        secondary: "#ffffff",
        base: "#374151",
        bgColor: "#f7f2ff",
      },
    },
    container: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
