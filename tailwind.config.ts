import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#000000",
        },
        secondary: {
          light: "#f3f4f6",
          dark: "#1f2937",
        },
        accent: {
          light: "#e5e7eb",
          dark: "#374151",
        },
        border: {
          light: "#e5e7eb",
          dark: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};
export default config;
