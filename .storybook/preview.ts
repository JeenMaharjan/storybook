import type { Preview } from "@storybook/preact";
import "../src/index.css";

// ✅ your theme variables too (optional but needed for button colors)
import "../src/styles/theme.css";


const preview: Preview = {
  globalTypes: {
    brand: {
      description: "Theme",
      defaultValue: "theme-brandA",
      toolbar: {
        items: ["theme-brandA", "theme-brandB"],
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      document.body.classList.remove("theme-brandA", "theme-brandB");
      document.body.classList.add(ctx.globals.brand);
      return Story();
    },
  ],
};

export default preview;
