import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      // Adicionando a definição da animação aqui
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#0B0E14", 
        foreground: "#E2E8F0",
        reactBlue: "#61DAFB",
        nodeGreen: "#83CD29",
        cardBg: "rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;