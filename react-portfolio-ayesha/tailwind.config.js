/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    borderRadius: {
      large: "50px",
      md: "0.375rem",
      lg: "0.5rem",
    },
    extend: {
      colors: {
        "dark-purple": "#161229",
        "light-orange": " #fecf8e",
        "light-purple": "#fbb41d",
        "light-yellow": "#da9e01",
        yellow: "#fbb41d",
        grey: "#757575",
        orange: " #fd9a00",
        purple: "#903674",
        blue: "#00ede0",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,213,165,1) 14%, rgba(135,38,105,1) 48%, rgba(22,18,41,1) 100%)",
      }),
      fontFamily: {
        Cookie: ["Cookie", "cursive"],
        Dosis: ["Dosis", "sans-serif"],
        JimNightshade: ["Jim Nightshade", "cursive"],
        MajorMonoDisplay: ["Major Mono Display", "monospace"],
        RockSalt: ["Rock Salt", "cursive"],
        SedgwickAve: ["Sedgwick Ave", "cursive"],
        SedgwickAveDisplay: ["Sedgwick Ave Display", "cursive"],
      },
      content: {
        brush: "url('./assets/home-section/spacehacker.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
