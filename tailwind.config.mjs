/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#009C9C",
          deep: "#007A7A",
          soft: "#E6F7F7",
        },
        ink: {
          DEFAULT: "#111418",
          muted: "#6B7280",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F4FBFB",
          border: "#D7ECEC",
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 90, 90, 0.18)",
        lift: "0 28px 70px rgba(0, 70, 70, 0.22)",
      },
    },
  },
  plugins: [],
};
