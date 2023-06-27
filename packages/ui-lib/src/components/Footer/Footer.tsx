import React, { PropsWithChildren } from "react";
import { useIsMounted, useTheme } from "hooks";

import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { Box, Flex } from "../Box";
import { LogoWithTextIcon } from "../Svg";
import { Link } from "../Link";
import { Skeleton } from "../Skeleton";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Theme } from "../ThemeSwitcher/types";

function Footer({ items, socials, ...props }: PropsWithChildren<FooterProps>) {
  const isMounted = useIsMounted();
  const { themeValue, setTheme } = useTheme();

  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} justifyContent="center" position="relative" {...props}>
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon id="mobile" width="130px" gradient dinamic />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label} $isHighlighted={isHighlighted}>
                  {href ? (
                    <Link href={href} target="_blank" rel="noreferrer noopener" color="textSubtle" bold={false}>
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon id="desktop" width="160px" gradient dinamic />
          </Box>
        </Flex>

        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          {socials?.length && <StyledSocialLinks socials={socials} pb={["20px", "16px", 0]} />}
          <Flex order={[2, null, 1]} alignItems="center">
            <Skeleton variant="round" width="106px" height="40px" isDataReady={isMounted}>
              <ThemeSwitcher theme={themeValue as Theme} toggleTheme={setTheme} />
            </Skeleton>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
}

export default Footer;
