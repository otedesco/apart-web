import { vars } from "ui/css/vars.css";
import { darkColors, lightColors } from "../../theme/colors";

export interface NavThemeType {
  height: string;
  background: string;
  backgroundTransparent: string;
  zIndex: number;
  borderBottom: string;
  dropdownBorder: string;
  dropdownBg: string;
  arrowBg: string;
}

const base = {
  height: vars.space["64px"],
  zIndex: 101,
  backgroundTransparent: "transparent",
  dropdownBoxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.12), 0 30px 60px -30px rgba(0, 0, 0, 0.15)",
};

export const light: NavThemeType = {
  ...base,
  background: "hsla(0,0%,100%,.8)",
  borderBottom: "inset 0 -1px 0 0 rgba(0,0,0,.1)",
  dropdownBorder: "#EBEBEB",
  // dropdownBg: "#fff",
  dropdownBg: "rgba(255,255,255, .6)",
  arrowBg: "#fff",
};

export const dark: NavThemeType = {
  ...base,
  background: "rgba(0, 0, 0, .5)",
  borderBottom: "inset 0 -1px 0 0 hsla(0,0%,100%,.1)",
  dropdownBorder: "#2E2E2E",
  dropdownBg: "rgba(0,0,0,.6)",
  arrowBg: "#000",
};
