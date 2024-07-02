const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 45s linear infinite",
      },
      boxShadow: {
        "glow-purple": "0 0 20px 5px rgba(128, 0, 128, 0.8)",
        "glow-green": "0 0 20px 5px rgba(0, 255, 0, 0.8)",
        "glow-darkgreen": "0 0 20px 5px rgba(0, 200, 0, 0.3)",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        mono: ["Roboto", "monospace"],
      },
      colors: {},
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "56px",
        7: "72px",
        8: "80px",
        9: "96px",
        10: "120px",
      },
      fontSize: {
        heading1: ["64px", { lineHeight: "80px" }],
        heading2: ["48px", { lineHeight: "40px" }],
        heading3: ["32px", { lineHeight: "35px" }],
        heading4: ["24px", { lineHeight: "35px" }],
        heading5: ["18px", { lineHeight: "20px" }],
        buttonText: ["16px", { lineHeight: "auto" }],
        paragraph1: ["16px", { lineHeight: "26px" }],
        paragraph2: ["16px", { lineHeight: "26px" }],
      },
      backgroundImage: {
        "home-hero": "url('/images/homehero.webp')",
      },
      backgroundPosition: {
        "custom-center-50": "center 50%",
        "custom-center-70": "center 70%",
      },
      screens: {
        short: { raw: "(max-height: 480px)" },
        miniWidth : {raw: "(width: 768px)"},
        longW: { raw: "(min-width: 1124px)" },
        bigScreen: { raw: "(min-width: 1424px)" },
        tall: { raw: "(min-height: 700px)" },
        middleWidth: { raw: "(min-width: 1024px)" },
        forFooter: { raw: "(min-width: 800px)" },
        forHomeHero: { raw: "(min-width: 825px)" },
        betweenS: { raw: "(min-width: 767px) and (max-width: 920px)" },
        betweenS2: { raw: "(min-width: 767px) and (max-width: 1025px)" },
        wideShort: { raw: "(min-width: 1024px) and (max-height: 768px)" },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ECF2F1",
            primary: "#F9F9F9",
            red: "#F85252",
            white: "#FFFFFF",
            gray: "#868686",
            darkGray: "#3b3b3b",
            lightgreyborder: "#E8E8E8",
            gray2: "#F9F9F9",
            darkblue1: "#14243C",
            darkblue2: "#2A394E",
            textColor: "#0B051D",
            darkblack: "#0B051D",
          },

          /*background: "#ECF2F1",
            primary: "#06433E",
            secondary: "#0B051D",
            ternary: "#FFFFFF",
            red: "#F85252",
            green: "#48937E",
            green2: "#80da5f",
            darkblue1: "#14243C",
            darkblue2: "#2A394E",
            grey1: "#868686",
            lightgreyborder: "#E8E8E8",
            grey2: "#F0F0F0",*/

          fontFamily: {
            sans: ["Lato", "sans-serif"],
            mono: ["Roboto", "monospace"],
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#",
            primary: "#",
            red: "#",
            white: "#",
            gray: "#",
            lightgreyborder: "#",
            gray2: "#",
            darkblue1: "#",
            darkblue2: "#",
            darkblack: "#",
            /*
            background: "#121212",
            primary: "#1F1F1F",
            secondary: "#242424",
            ternary: "#333333",
            grey: "#3A3A3A",
            border: "#505050",
            text: "#E0E0E0",
            accent: "#BB86FC",*/
          },
          fontFamily: {
            sans: ["Lato", "sans-serif"],
            mono: ["Roboto", "monospace"],
          },
        },
      },
    }),
  ],
};
