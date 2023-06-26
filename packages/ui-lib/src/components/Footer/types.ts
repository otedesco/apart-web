import { FlexProps } from "../Box";

export type FooterLinkType = {
  label: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};
// FIXME: Fix this any type declaration
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SocialLinkType = { label: string; icon: any; href: string };

export type FooterProps = {
  items: FooterLinkType[];
  socials?: SocialLinkType[];
} & FlexProps;
