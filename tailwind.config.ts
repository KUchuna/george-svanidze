import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1": "#878392",
        "gray-2": "#A3A3A3",
        "gray-3": "#C3C1C7",
        "gray-4": "#868391",
      },
      fontFamily: {
        "inter": ['Inter', "sans-serif"],
        "grotesk": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  safelist: ["dark"]
} satisfies Config;
