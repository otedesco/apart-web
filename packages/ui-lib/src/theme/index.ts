import { vars } from "ui/css/vars.css";
import { Breakpoints, MediaQueries, ZIndices } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  colors: typeof vars.colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: typeof vars.space;
  shadows: typeof vars.shadows;
  radii: typeof vars.radii;
  zIndices: ZIndices;
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
