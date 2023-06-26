import Footer from "./Footer";
import { footerLinks, socials } from "./config";

export default {
  title: "Layout/Footer",
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    items: footerLinks,
    socials,
  },
};

export const LoggedOut = {
  // this one has no parameters
};
