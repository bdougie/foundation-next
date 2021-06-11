module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sh: " 0px 10px 20px rgb(0 0 0 / 5%)",
      },
      fontFamily: {
        quick: ["quicksand", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      height: {
        tbml: "560px",
      },
      spacing: {
        84: "21rem",
      },
      cursor: {
        "zoom-in": "zoom-in",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
