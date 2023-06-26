export const theme = {
  SYSTEM: "system",
  DARK: "dark",
  LIGHT: "light",
} as const;

export type Theme = (typeof theme)[keyof typeof theme];

export interface ThemeSwitcherProps {
  theme: Theme;
  toggleTheme: (themes: Theme) => void;
}
