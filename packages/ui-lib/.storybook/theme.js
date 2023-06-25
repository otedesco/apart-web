import { create } from "@storybook/theming/create";

// https://storybook.js.org/docs/configurations/theming/

export default create({
  base: "dark",
  fontBase: "'Untitled Sans', -apple-system, system-ui, sans-serif",
  appBg: "hsl(246 6.0% 9.0%)",
  appBorderRadius: 0,
  barBg: "hsl(246 6.0% 9.0%)",
  brandTitle: "Apart",
  brandImage: "images/logo.svg",
  brandUrl: "__self",
});
