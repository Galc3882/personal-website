import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#2A2C2E",
      midDark: "#2E2E2E",
      darker: "#1B1C1D",
      card: "#222222",
      button: "#424242",
      buttonHover: "#525252",
      blue: "#2525B9",
      white: "#ffffff",
    },
    extend: {
      "cool-pattern": "url('images/cool-pattern.svg')",
      boxShadow: {
        "2xl": "-4px 4px 8px 0px #242424",
        "3xl-inner": "inset 5px 5px 15px 5px #171717",
      },
      screens: {
        short: { raw: "(min-height: 800px)" },
        tablet: { raw: "(max-width: 850px)" },
        stablet: { raw: "(max-width: 520px)" },
        phone: { raw: "(max-width: 425px)" },
        sphone: { raw: "(max-width: 350px)" },
      },
    },
  },
  plugins: [],
};
export default config;
