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
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        mono: ["Roboto", "monospace"],
      },
      colors: {
        primary: "#06433E",
        secondary: "#0B051D",
        red: "#F85252",
        background: "#ECF2F1",
        green: "#48937E",
        darkblue1: "#14243C",
        darkblue2: "#2A394E",
        grey1: "#868686",
        lightgreyborder: "#E8E8E8",
        grey2: "#F0F0F0",
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
      screens: {
        md: "1440px",
        sm: "768px",
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
        "home-hero": "url('/images/temp.png')",
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
