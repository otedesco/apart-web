// import { MatchBreakpointsProvider } from "../src";
import React, { useEffect } from "react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "styled-components";

import { default as GlobalStyles } from "../src/ResetCSS.tsx";
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";
import { light, dark } from "../src/theme";

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const themes = {
  light: { name: "light", backgroundColor: light.colors.background, ...light },
  dark: {
    name: "dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
};

const StyledThemeProvider = (props) => {
  const { setTheme } = useNextTheme();

  useEffect(() => {
    setTheme(props.theme.name);
  }, [props.theme.name]);

  return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};

const StorybookThemeProvider = (props) => {
  return (
    <NextThemeProvider>
      <StyledThemeProvider {...props} />
    </NextThemeProvider>
  );
};

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: "light",
    Provider: StorybookThemeProvider,
    GlobalStyles,
  }),
];
