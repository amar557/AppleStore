/** @type {import('tailwindcss').Config} */
// ignore eslint
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
