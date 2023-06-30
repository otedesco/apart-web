import { styled } from "styled-components";
import { Flex } from "../Box";

export const Wrapper = styled(Flex)<{ $isTransparent: boolean }>`
  position: sticky;
  top: 0;
  justify-content: center;
  width: 100%;
  z-index: ${({ theme }) => theme.nav.zIndex};
  min-height: ${({ theme }) => theme.nav.height};
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  ${({ $isTransparent, theme }) =>
    !$isTransparent &&
    `
    background-color: ${theme.nav.background};
    box-shadow: ${theme.nav.borderBottom};
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      backdrop-filter: saturate(180%) blur(5px);
      backface-visibility: hidden;
      z-index: -1;
      top: -1px;
      transform: translateZ(0);
    }
  `}
`;
