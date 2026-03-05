import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050510",
        panel: "#0d1224",
        neon: "#5b8cff",
        success: "#00ffa3",
        danger: "#ff5572"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(24, 39, 75, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
