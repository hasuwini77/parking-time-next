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
        "infinite-scroll": "infinite-scroll 25s linear infinite",
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
      colors: {
        primary: "#F9F9F9",
        secondary: "#0B051D",
        red: "#F85252",
        background: "#ECF2F1",
        green: "#48937E",
        green2: "#80da5f",
        darkblue1: "#14243C",
        darkblue2: "#2A394E",
        grey1: "#868686",
        lightgreyborder: "#E8E8E8",
        grey2: "#F0F0F0",

        white: "#FFFFFF",
        green3: "#50AA5F",
        gray2: "#F9F9F9",


      },
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
        "home-hero": "url('/images/hero2.webp')",
      },
      backgroundPosition: {
        "custom-center-50": "center 50%",
        "custom-center-70": "center 70%",
      },
      screens: {
        short: { raw: "(max-height: 480px)" },
        tall: { raw: "(min-height: 700px)" },
        middleWidth: { raw: "(min-width: 1024px)" },
        forFooter: { raw: "(min-width: 800px)" },
        betweenS: { raw: "(min-width: 768px) and (max-width: 920px)" },
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
