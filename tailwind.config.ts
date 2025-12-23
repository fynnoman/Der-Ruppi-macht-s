import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d3748',
          dark: '#1a202c',
          light: '#4a5568',
        },
        accent: {
          DEFAULT: '#718096',
          light: '#a0aec0',
        },
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
export default config;
