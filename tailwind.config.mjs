import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#b3c7ff",
  600: "#364bff",
  900: "#182775",
  950: "#131e4f",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: accent,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.neutral,
      },
    },
  },
  plugins: [starlightPlugin()],
};
