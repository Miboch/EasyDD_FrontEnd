module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      appLoginColor: {
        DEFAULT: "#121212",
      },
      appColor: {
        DEFAULT: "#454545",
      },
      pinkpink: {
        DEFAULT: "#F575CA",
      },
      twhite: {
        DEFAULT: "#fafafa",
      },
      appoff: {
        DEFAULT: "#333333",
      },
    },
  },
  variants: {
    extend: { padding: ["hover"] },
  },
  plugins: [],
};
