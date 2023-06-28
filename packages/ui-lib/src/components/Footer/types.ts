import { ElementType } from "react";
import { FlexProps } from "../Box";

export type FooterLinkType = {
  label: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};

export type SocialLinkType = { label: string; icon: ElementType; href: string };

export type FooterProps = {
  items: FooterLinkType[];
  socials?: SocialLinkType[];
} & FlexProps;
