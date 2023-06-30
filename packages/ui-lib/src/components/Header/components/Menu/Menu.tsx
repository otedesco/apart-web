import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { css, keyframes, styled } from "styled-components";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useTheme } from "hooks";
import { Flex } from "../../../Box";
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

const exitToRight = keyframes`from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }`;

const exitToLeft = keyframes`from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }`;

const MenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const List = styled(NavigationMenu.List)`
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

const Item = styled(NavigationMenu.Item)``;

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

const Trigger = styled(NavigationMenu.Trigger)`
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

const Link = styled(NavigationMenu.Link)`
  ${actionHandlerStyles}
  display: block;
  text-decoration: none;
`;

const Content = styled(NavigationMenu.Content)`
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

const ContentList = styled.ul`
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

const Viewport = styled(NavigationMenu.Viewport)`
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

const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

const Indicator = styled(NavigationMenu.Indicator)`
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

const Arrow = styled.svg`
  top: -10px;
  z-index: 5;
  position: absolute;
  width: 32px;
  height: 32px;
  transform: rotate(180deg);
`;

const EmphatizedContent = styled.a`
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

const SubMenuItems = styled.li`
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

const ListItem = React.forwardRef(({ children, title, ...props }: any, forwardedRef) => (
  <SubMenuItems>
    <NavigationMenu.Link asChild>
      <a className="ListItemLink" {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </SubMenuItems>
));

const Menu = () => {
  const { theme } = useTheme();
  return (
    <Flex flex="1 1" justifyContent="center" alignItems="center" m={0} width={1}>
      <MenuRoot>
        <List>
          <Item>
            <Trigger>
              Overview <CaretDownIcon aria-hidden />
            </Trigger>
            <Content>
              <ContentList>
                {/* TODO: DELETE THIS */}
                <li style={{ gridRow: "span 3" }}>
                  <NavigationMenu.Link asChild>
                    <EmphatizedContent href="/">
                      <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                        <path d="M12 0H4V8H12V0Z" />
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                      </svg>
                      <div className="CalloutHeading">Radix Primitives</div>
                      <p className="CalloutText">Unstyled, accessible components for React.</p>
                    </EmphatizedContent>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ContentList>
            </Content>
          </Item>
          <Item>
            <Trigger>
              Features <CaretDownIcon aria-hidden />
            </Trigger>
            <Content>
              <ContentList>
                <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                  A quick tutorial to get you up and running with Radix Primitives.
                </ListItem>
                <ListItem title="Styling" href="/docs/primitives/guides/styling">
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem title="Animation" href="/docs/primitives/guides/animation">
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem title="Releases" href="/docs/primitives/overview/releases">
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ContentList>
            </Content>
          </Item>
          <Item>
            <Link href="/">Templates</Link>
          </Item>
          <Item>
            <Link href="/">Integrations</Link>
          </Item>
          <Item>
            <Link href="/">Customers</Link>
          </Item>
          <Item>
            <Link href="/">Enterprise</Link>
          </Item>
          <Item>
            <Link href="/">Pricing</Link>
          </Item>
          <Indicator className="NavigationMenuIndicator">
            <Arrow fill="none" height="46" viewBox="0 0 158 46" width="158">
              <path
                d="M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z"
                fill={theme?.nav.arrowBg}
              />
              <path
                d="M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z"
                fill={theme?.nav.dropdownBorder}
              />
            </Arrow>
          </Indicator>
        </List>
        <ViewportPosition>
          <Viewport />
        </ViewportPosition>
      </MenuRoot>
    </Flex>
  );
};

export default Menu;
