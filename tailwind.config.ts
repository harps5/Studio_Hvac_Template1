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
        // Warm, considered palette — coulee geology, prairie light
        linen: "#F4F0EA",        // page background — warm off-white, never #fff
        surface: "#FAF7F2",      // lifted card / nav background
        ink: "#0F0E0D",          // body text, warm near-black
        graphite: "#3A3733",     // secondary text
        muted: "#7A7268",        // tertiary / labels
        rule: "#1F1D1A",         // hairline color (use at low alpha)
        sienna: "#B2563B",       // signature accent — burnt sienna / copper
        siennaDeep: "#8E3F26",   // hover / pressed state
        moss: "#3F4A3A",         // optional secondary accent (rare use)
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial scale — tight tracking on display, generous body
        "display-xl": ["clamp(3.5rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        "label": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        prose: "62ch",
        page: "78rem",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
