import { DefaultTheme } from "styled-components";
import base from "./base";
import { lightColors } from "./colors";
import { light as lightNav } from "../components/Header/theme";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,

  // Components based themes
  nav: lightNav,
};

export default lightTheme;
