/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('../src/Assests/bg.png')",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(95%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.9s ease-out",
      },
    },
  },
  plugins: [],
};
