import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";
import { PropsWithChildren } from "react";

export type TextProps = PropsWithChildren<{
  color?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}> &
  SpaceProps &
  TypographyProps &
  LayoutProps;
