import { styled } from "styled-components";
import { Flex } from "../Box";

export const ThemeSwitcherWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.large};
`;

export const StyledIconButton = styled.button<{ $selected: boolean }>`
  display: flex;
  background: none;
  cursor: pointer;
  border: none;
  width: 32px;
  min-width: auto;
  height: 32px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: ${({ theme }) => theme.radii.circle};
  align-items: center;
  justify-content: center;
  ${({ $selected, theme }) =>
    $selected &&
    `background-color: ${theme.colors.cardBorder};
    color: ${theme.colors.text}
  `};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.15s ease;
  }
`;
