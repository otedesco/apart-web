import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-toolbars",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const finalConfig = mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });

    return finalConfig;
  },
  staticDirs: ["./public", "./public/fonts"],
  docs: {
    autodocs: "tag",
  },
};
export default config;
