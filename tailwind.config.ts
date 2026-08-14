import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: {
            subtle: "#eef2ff",
            light: "#e0e7ff",
            DEFAULT: "#818cf8",
            border: "#c7d2fe",
            text: "#4338ca",
          },
          sky: {
            subtle: "#f0f9ff",
            light: "#e0f2fe",
            DEFAULT: "#38bdf8",
            border: "#bae6fd",
            text: "#0369a1",
          },
          mint: {
            subtle: "#ecfdf5",
            light: "#d1fae5",
            DEFAULT: "#34d399",
            border: "#a7f3d0",
            text: "#047857",
          },
          rose: {
            subtle: "#fff1f2",
            light: "#ffe4e6",
            DEFAULT: "#fb7185",
            border: "#fecdd3",
            text: "#be123c",
          },
          amber: {
            subtle: "#fffbeb",
            light: "#fef3c7",
            DEFAULT: "#fbbf24",
            border: "#fde68a",
            text: "#b45309",
          },
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#0b0f19",
          },
        },
      },
      boxShadow: {
        "pastel-sm": "0 2px 8px -1px rgba(99, 102, 241, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)",
        "pastel-md": "0 8px 24px -4px rgba(99, 102, 241, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "pastel-lg": "0 16px 36px -6px rgba(99, 102, 241, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.04)",
        "pastel-glow": "0 0 30px -5px rgba(129, 140, 248, 0.25)",
        "dark-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
