/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      main: " 0px 10px 0px #000000",

      hover: "0px 10px 0px #5C2DD5",
    },
    colors: {
      DarkBlack: "#000000",
      DarkPurple: "#5C2DD5",
      LightPurple: "#7945FF",
      LightRed: "#FD6687",
      MediumYellow: "#FFCE67",
      PureWhite: "#FFFFFF",
    },
  },
  plugins: [],
};
