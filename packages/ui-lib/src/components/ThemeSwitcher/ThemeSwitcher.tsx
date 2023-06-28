import React, { memo, useCallback } from "react";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import { Theme, ThemeSwitcherProps } from "./types";
import { StyledIconButton, ThemeSwitcherWrapper } from "./styles";

const iconProps = {
  width: "16",
  height: "16",
};

const Icon = ({
  name,
  toggleTheme,
  selected,
}: {
  name: Theme;
  selected: boolean;
  toggleTheme: (theme: Theme) => void;
}) => {
  let I = DesktopIcon;
  if (name === "dark") I = MoonIcon;
  if (name === "light") I = SunIcon;

  const handleClick = useCallback(() => toggleTheme(name), [name, toggleTheme]);

  return (
    <StyledIconButton $selected={selected} onClick={handleClick}>
      <I {...iconProps} />
    </StyledIconButton>
  );
}

const ThemeSwitcher = ({ theme, toggleTheme }: ThemeSwitcherProps) => {
  const values: Theme[] = ["light", "dark", "system"];

  return (
    <ThemeSwitcherWrapper px="4px" py="3px">
      {values.map((name) => (
        <Icon name={name} selected={theme === name} toggleTheme={toggleTheme} />
      ))}
    </ThemeSwitcherWrapper>
  );
}

ThemeSwitcher.defaultProps = {
  theme: "system",
};

export default memo(ThemeSwitcher, (prev, next) => prev.theme === next.theme);
