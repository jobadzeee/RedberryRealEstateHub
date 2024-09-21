import("tailwindcss").Config;

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "5px 5px 12px 0px #02152614",
      },
      fontFamily: {
        'firaGo': ['Fira Go', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
