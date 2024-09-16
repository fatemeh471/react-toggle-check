import type { Preview } from "@storybook/react";
import "../src/tailwind.scss";
import "@nds/icons/index.css";
import "@nds/nebulox/index.css";

import { useTheme } from "./useTheme";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["Introduction", "Changelog"],
      },
    },
  },
};

export default preview;

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    defaultValue: "dark",
    toolbar: {
      icon: "lightning",
      items: ["dark", "light"],
      showName: true,
    },

  },
};
export const decorators = [useTheme];
