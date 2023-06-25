import { create } from "@storybook/theming/create";

// https://storybook.js.org/docs/configurations/theming/

export default create({
  base: "dark",

  fontBase: "'Untitled Sans', -apple-system, system-ui, sans-serif",

  colorSecondary: "#6E8387",
  appBg: "hsl(246 6.0% 9.0%)",
  appBorderColor: "#EDEDED",
  appBorderRadius: 6,

  barTextColor: "#999999",
  barSelectedColor: "#7D4CDB",
  barBg: "hsl(246 6.0% 9.0%)",

  brandTitle: "Apart",
  brandImage: "images/logo.svg",
  brandUrl: "__self",
});
