module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xxs: "8px",
      },
      fontFamily: {
        montera: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#EBEBEB",
        secoundry: "#FFFFFF",
        botton: "#7367F0",
        darkmodePrimary: "#171D30",
        darkmodeSecoundry: "#283046",
        darkmodeFots: "#D0D2D6",
        tableclmn: "#333C53",
        c1: "##d3a9f5",
        c2: "#",
        noty: "#EA5455",
        iconColor: "#6E6B7B",
        Textgray: "##ababab",
      },
      d: {
        dk: "25px",
      },
    },
    boxShadow: {
      dhruv: "0px 1px 4px rgba(0, 0, 0, 0.16)",
      glowShadow: "-1px 17px 20px -5px rgba(115,103,240,0.9)",
    },
    transitionProperty: {
      mlT: "9px",
    },
  },
  plugins: [],
};
