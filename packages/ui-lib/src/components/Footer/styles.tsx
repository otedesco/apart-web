import styled from "styled-components";

import { Box, Flex } from "../Box";
import SocialLinks from "./components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li<{ $isHighlighted?: boolean }>`
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textSubtle};
  &:first-child {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
  & > a:hover {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s ease;
  }
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledSocialLinks = styled(SocialLinks)`
  color: ${({ theme }) => theme.colors.textSubtle};
  & > a {
    border-radius: ${({ theme }) => theme.radii.small};
    &:hover {
      background-color: ${({ theme }) => theme.colors.cardBorder};
      color: ${({ theme }) => theme.colors.text};
      transition: color, background-color 0.2s ease;
    }
  }
`;

export const StyledToolsContainer = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;
