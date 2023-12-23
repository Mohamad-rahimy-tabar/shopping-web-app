/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
      },
      fontFamily: {
        kavoon: "Kavoon",
      },
      padding: {
        "2/3": "66.666666%",
      },
      colors: {
        main: {
          base: "#E5E5E5",
          primary: "#38B2AC",
          secondary: "#fafafa",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
};
