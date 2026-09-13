import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#e6eaef",
        ink: "#1b1e24",
        accent: "#c24a22",
        mute: "#5a606b",
        night: "#14161a",
        chalk: "#e6e8ed",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: [
          "var(--doodle-ui-font, var(--font-caveat))",
          "ui-sans-serif",
          "cursive",
        ],
        mono: ["var(--font-ibm)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
