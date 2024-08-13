import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SuperWeb Barebones",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Welcome", slug: "guides/welcome" },
            { label: "Quick Start", slug: "guides/quick-start" },
          ],
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
      ],
      customCss: ["./src/tailwind.css", "./src/global.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
