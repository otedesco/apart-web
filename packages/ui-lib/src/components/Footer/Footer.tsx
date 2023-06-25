import React from "react";
import { StyledFooter, StyledIconMobileContainer } from "./styles";

import { FooterProps } from "./types";
import { Box, Flex } from "../Box";
import { LogoWithTextIcon } from "../Svg";

function Footer(props: React.FC<React.PropsWithChildren<FooterProps>>) {
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
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon width="160px" />
          </Box>
        </Flex>
      </Flex>
    </StyledFooter>
  );
}

export default Footer;
