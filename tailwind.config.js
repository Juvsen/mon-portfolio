/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#03040c",
        "bg-2": "#060b1e",
        surface: "#0a1124",
        "surface-2": "#0f1730",
        ink: {
          DEFAULT: "#eef2ff",
          muted: "#8b93b8",
          dim: "#5a6388",
        },
        primary: { DEFAULT: "#38bdf8", deep: "#0ea5e9" },
        secondary: "#6366f1",
        accent: "#22d3ee",
        violet: "#8b5cf6",
        success: "#34d399",
        warning: "#fbbf24",
        error: "#f87171",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        display: ['"Syne"', '"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "aurora-slow": "aurora 18s ease-in-out infinite alternate",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "float-y": "floatY 7s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        orbit: "orbit 28s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(-6%, -4%, 0) scale(1.1)", opacity: "0.55" },
          "50%": { transform: "translate3d(4%, 3%, 0) scale(1.2)", opacity: "0.75" },
          "100%": { transform: "translate3d(-2%, 5%, 0) scale(1.05)", opacity: "0.6" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(0) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(0) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
