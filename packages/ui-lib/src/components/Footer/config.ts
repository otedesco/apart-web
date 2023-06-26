import { TwitterLogoIcon, GitHubLogoIcon, InstagramLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import { FooterLinkType, SocialLinkType } from "./types";

export const socials: SocialLinkType[] = [
  {
    label: "Twitter",
    icon: TwitterLogoIcon,
    href: "https://twitter.com",
  },
  {
    label: "Instagram",
    icon: InstagramLogoIcon,
    href: "https://instagram.com/",
  },
  {
    label: "Github",
    icon: GitHubLogoIcon,
    href: "https://github.com/",
  },
  {
    label: "Discord",
    icon: DiscordLogoIcon,
    href: "https://discord.gg",
  },
];

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "About us",
        href: "https://google.com",
      },
      {
        label: "Press Room",
        href: "https://google.com",
      },
      {
        label: "Work with us",
        href: "https://google.com",
      },
      {
        label: "Mortgage",
        href: "https://google.com",
        isHighlighted: true,
      },
      {
        label: "Data",
        href: "https://google.com",
      },
      {
        label: "News",
        href: "https://google.com",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Frequently asked questions (FAQ's)",
        href: "https://google.com",
      },
      {
        label: "Contact",
        href: "https://google.com",
      },
      {
        label: "Privacy",
        href: "https://google.com",
      },
      {
        label: "Cookies policy",
        href: "https://google.com",
      },
      {
        label: "General conditions",
        href: "https://google.com",
      },
    ],
  },
  {
    label: "Other countries",
    items: [
      {
        label: "Brasil",
        href: "https://google.com",
      },
      {
        label: "Mexico",
        href: "https://google.com",
      },
      {
        label: "Peru",
        href: "https://google.com",
      },
      {
        label: "Ecuador",
        href: "https://google.com",
      },
      {
        label: "Venezuela",
        href: "https://google.com",
      },
      {
        label: "Panama",
        href: "https://google.com",
      },
    ],
  },
];
