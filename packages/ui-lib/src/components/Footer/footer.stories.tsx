import Footer from "./Footer";
import { footerLinks, socials } from "./config";

export default {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const WithItems = {
  args: {
    items: footerLinks,
    socials,
  },
};
