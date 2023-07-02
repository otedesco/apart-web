import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { css, keyframes, styled } from "styled-components";
import { appearAnimation, disappearAnimation } from "../../../../util/animationToolkit";

const scaleIn = keyframes`
    from {
        opacity: 0;
        transform: rotateX(-30deg) scale(0.9);
    }
    to {
        opacity: 1;
        transform: rotateX(0deg) scale(1);
    }`;

const scaleOut = keyframes`
    from {
        opacity: 1;
        transform: rotateX(0deg) scale(1);
    }
    to {
        opacity: 0;
        transform: rotateX(-10deg) scale(0.95);
    }`;

const enterFromRight = keyframes`  
    from {
        opacity: 0;
        transform: translateX(200px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }`;

const enterFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-200px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }`;

const exitToRight = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(200px);
    }`;

const exitToLeft = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-200px);
    }`;

export const MenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const List = styled(NavigationMenu.List)`
  display: flex;
  gap: 8px;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Item = styled(NavigationMenu.Item)``;

const actionHandlerStyles = css`
  color: ${({ theme }) => theme.colors.textSubtle};
  outline: none;
  user-select: none;
  border-radius: 9999px;
  background: transparent;
  border: 0;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition-property: background, color;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Trigger = styled(NavigationMenu.Trigger)`
  ${actionHandlerStyles}
  display: flex;
  align-items: center;
  gap: 4px;
  &[data-state="open"] {
    background: ${({ theme }) => theme.colors.cardBorder};
    color: ${({ theme }) => theme.colors.text};
    > svg {
      transform: rotate(-180deg);
    }
  }
  > svg {
    top: 1px;
    transition: transform 250ms ease;
  }
`;

export const Link = styled(NavigationMenu.Link)`
  ${actionHandlerStyles}
  display: block;
  text-decoration: none;
`;

export const Content = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 250ms;
  animation-timing-function: ease;
  width: auto;
  &[data-motion="from-start"] {
    animation-name: ${enterFromLeft};
  }
  &[data-motion="from-end"] {
    animation-name: ${enterFromRight};
  }
  &[data-motion="to-start"] {
    animation-name: ${exitToLeft};
  }
  &[data-motion="to-end"] {
    animation-name: ${exitToRight};
  }
`;

export const ContentList = styled.ul`
  display: grid;
  padding: 22px;
  margin: 0;
  column-gap: 10px;
  list-style: none;
  width: 600px;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  ${({ theme }) => theme.mediaQueries.sm} {
    &[data-variant="emphatized"] {
      width: 500px;
      grid-template-columns: 0.75fr 1fr;
    }
    &[data-variant="default"] {
      width: 600px;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 1fr);
    }
  }
`;

export const Viewport = styled(NavigationMenu.Viewport)`
  backdrop-filter: blur(6px);
  position: relative;
  transform-origin: top center;
  margin-top: 20px;
  width: 100%;
  background: ${({ theme }) => theme.nav.dropdownBg};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.nav.dropdownBorder};
  width: calc(var(--radix-navigation-menu-viewport-width) + 1px * 2);
  height: calc(var(--radix-navigation-menu-viewport-height) + 1px * 2);
  transition: width, height, 0.3s ease;
  box-shadow: ${({ theme }) => theme.nav.dropdownBoxShadow};

  &[data-state="open"] {
    animation: ${scaleIn} 200ms ease;
  }
  &[data-state="closed"] {
    animation: ${scaleOut} 200ms ease;
  }
`;

export const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

export const Indicator = styled(NavigationMenu.Indicator)`
  position: absolute;
  left: 0px;
  width: 99px;
  transform: translateX(0px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  pointer-events: none;
  top: calc(100% + 20px - 9px);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 0.25s ease;
  &[data-state="visible"] {
    animation: ${appearAnimation} 200ms ease;
  }
  &[data-state="hidden"] {
    animation: ${disappearAnimation} 200ms ease;
  }
`;

export const Arrow = styled.svg`
  top: -10px;
  z-index: 5;
  position: absolute;
  width: 32px;
  height: 32px;
  transform: rotate(180deg);
`;

export const EmphatizedContent = styled.a`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, hsl(272 51% 54%) 0%, hsl(226 70% 55.5%) 100%);
  border-radius: 6px;
  padding: 25px;
  text-decoration: none;
  outline: none;
  user-select: none;
  :focus {
    box-shadow: 0 0 0 2px hsl(250 46.8% 38.9%);
  }
  .CalloutHeading {
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 7px;
  }

  .CalloutText {
    color: var(--mauve-4);
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const SubMenuItems = styled.li`
  .ListItemLink {
    display: block;
    outline: none;
    text-decoration: none;
    user-select: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 1;
  }
  .ListItemLink:focus {
    box-shadow: 0 0 0 2px hsl(250 46.8% 38.9%);
  }
  .ListItemLink:hover {
    background-color: hsl(241 5% 14.3%);
  }

  .ListItemHeading {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 5px;
    color: hsl(252 87% 96.4%);
  }

  .ListItemText {
    color: hsl(253 4% 63.7%);
    line-height: 1.4;
    font-weight: initial;
  }
`;
