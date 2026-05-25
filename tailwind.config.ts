import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal-and-cream with a single forest-green pop.
        // Names preserved from v1 so components don't churn; values reset.
        linen: "#F5F4F0",        // page background — cream, neutral
        surface: "#FBFAF7",      // lifted card / nav background
        ink: "#141414",          // body text — true charcoal, no warmth tint
        graphite: "#2A2A2A",     // secondary text
        muted: "#6B6B6B",        // tertiary / labels
        rule: "#141414",         // hairlines (use at low alpha)
        sienna: "#0F5938",       // ★ signature accent — deep forest green
        siennaDeep: "#0A3F27",   // hover / pressed
      },
      fontFamily: {
        // One sans for everything. Geist supplies its own CSS variable.
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        // Workmanlike scale — confident without being precious.
        // Headlines stay punchy; body stays legible.
        "display-xl": ["clamp(3rem, 7vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.625rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.16em" }],
        "label": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.06em" }],
      },
      maxWidth: {
        prose: "62ch",
        page: "78rem",
      },
      spacing: {
        // Tightened from v1's gallery-precious clamp(5–9rem).
        section: "clamp(4rem, 7vw, 6.5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
