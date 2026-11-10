/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#009C9C",
          deep: "#007A7A",
        },
        ink: {
          DEFAULT: "#111418",
          muted: "#6B7280",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F9FAFB",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
