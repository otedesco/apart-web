import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import { Text } from "../Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
`;

function Link({ external, ...props }: PropsWithChildren<LinkProps>) {
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
}

Link.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  color: "primary",
};

export default Link;
