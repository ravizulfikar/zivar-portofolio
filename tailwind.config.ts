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
        // System Design Palette: Refined Graphite / Deep Navy, Off-White, Electric Cyan & Teal
        sys: {
          bg: {
            light: "#f8fafc",      // slate-50 off-white canvas
            dark: "#090d16",       // deep obsidian / graphite navy canvas
          },
          surface: {
            light: "#ffffff",      // card white
            dark: "#0f172a",       // slate-900 primary card
          },
          elevated: {
            light: "#f1f5f9",      // slate-100 secondary panel
            dark: "#131d33",       // elevated panel navy
          },
          border: {
            light: "#e2e8f0",      // slate-200
            dark: "#1e293b",       // slate-800
            subtle: {
              light: "#cbd5e1",    // slate-300
              dark: "#334155",     // slate-700
            },
          },
          text: {
            primary: {
              light: "#0f172a",    // slate-900
              dark: "#f8fafc",     // slate-50
            },
            secondary: {
              light: "#334155",    // slate-700
              dark: "#94a3b8",     // slate-400
            },
            muted: {
              light: "#64748b",    // slate-500
              dark: "#64748b",     // slate-500
            },
          },
          accent: {
            DEFAULT: "#0ea5e9",    // Electric Cyan / Sky-500
            hover: "#0284c7",      // Sky-600
            light: "#38bdf8",      // Sky-400
            teal: "#14b8a6",       // Teal-500
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "sys-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "sys-card": "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        "sys-card-dark": "0 4px 24px -2px rgba(0, 0, 0, 0.4)",
        "sys-glow": "0 0 25px -5px rgba(14, 165, 233, 0.15)",
        "sys-elevated": "0 12px 32px -8px rgba(15, 23, 42, 0.08)",
        "sys-elevated-dark": "0 12px 32px -8px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
