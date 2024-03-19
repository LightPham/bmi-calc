/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        "extra-none": "1.1",
      },
      colors: {
        blue: "#345FF6",
        gunmental: "#253347",
        darkblue: "#5E6E85",
        borders: "#D8E2E7",
        white: "#FFFFFF",
      },
      
      boxShadow: {
        box: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
        hero: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
      },
    },
  },
  plugins: [],
}


