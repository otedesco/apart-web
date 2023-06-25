import styled from "styled-components";

import { Box, Flex } from "../Box";

export const StyledFooter = styled(Flex)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;
