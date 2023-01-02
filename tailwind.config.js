/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('../src/Assests/bg.png')",
      },
    },
  },
  plugins: [],
};
