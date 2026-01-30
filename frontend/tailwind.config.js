/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        widget: {
          dark: "var(--bg-widget-dark)",
          light: "var(--bg-widget-light)",
        },
        green: {
          primary: "var(--green-primary)",
          secondary: "var(--green-secondary)",
          accent: "var(--green-accent)",
          light: "var(--green-light)",
          glow: "var(--green-glow)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          dark: "var(--text-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
    },
  },
  plugins: [],
};
