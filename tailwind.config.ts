import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tahoma', 'sans-serif'],   
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: "#708B7A",
        navbar: "#69E097",
        headerSection: "#E0CB69",
        main: "#6F9C80",
      },
    },
  },
  plugins: [],
} satisfies Config;
