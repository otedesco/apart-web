import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

const getColor = ({ color, theme }: DefaultTheme) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const Text = styled.div.attrs<TextProps>((props) => {
  if (typeof props.title !== "undefined") {
    return props;
  }
  if (props.ellipsis && typeof props.children === "string") {
    return { ...props, title: props.children };
  }
  return { ...props, title: undefined };
})<TextProps>`
  color: ${getColor};
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  line-height: 20px;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}

  ${({ small }) => small && `font-size: 14px;`}
`;

Text.defaultProps = {
  color: "text",
  small: false,
  fontSize: "14px",
  ellipsis: false,
};

export default Text;
