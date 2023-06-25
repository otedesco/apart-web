/** @type { import('@storybook/react-vite').StorybookConfig } */

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
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  features: {
    postcss: false,
  },
  staticDirs: ["./public", "./public/fonts"],
  docs: {
    autodocs: "tag",
  },
};
export default config;
