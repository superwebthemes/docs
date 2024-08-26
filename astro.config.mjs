import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [
    starlight({
      title: "SuperWeb Barebones",
      social: {
        github: "https://github.com/superwebthemes/barebones",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      customCss: ["./src/tailwind.css", "./src/global.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
