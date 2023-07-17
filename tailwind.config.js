/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#",
        yellowColor: "#",
        purpleColor: "#",
        irisBlueColor: "#",
        headingColor: "#",
        textColor: "#",
      },
      boxShadow: {
        pannelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
