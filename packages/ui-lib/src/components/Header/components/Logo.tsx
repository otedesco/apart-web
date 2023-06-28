import React, { useContext } from "react";
import styled from "styled-components";
import { HeaderContext } from "../context";
import { Flex } from "../../Box";
import { LogoIcon, LogoWithTextIcon } from "../../Svg";

interface Props {
  href: string;
}

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 37px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 100px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(HeaderContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon id="mobile-icon" className="mobile-icon" dinamic gradient />
      <LogoWithTextIcon id="desktop-icon" className="desktop-icon" dinamic gradient />
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Apart home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Apart home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
