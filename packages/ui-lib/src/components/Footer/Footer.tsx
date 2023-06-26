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
          <LogoWithTextIcon width="130px" gradient />
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
            <LogoWithTextIcon width="160px" />
          </Box>
        </Flex>
        {socials?.length && (
          <StyledSocialLinks socials={socials} order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        )}
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
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
