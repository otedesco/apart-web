import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { dark as darkNav } from "../components/Header/theme";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,

  // Components based themes
  nav: darkNav,
};

export default darkTheme;
