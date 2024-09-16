import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { FixWarningDockerBuild } from "./dockerBuild";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 4096,
        rollupOptions: {
          onwarn: ({ message }) => {
            FixWarningDockerBuild({message})
          },
        },
      },
    });
  },

};
export default config;
