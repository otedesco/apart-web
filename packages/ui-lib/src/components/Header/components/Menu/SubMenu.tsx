import React, { FC, useMemo, memo } from "react";
import { Content, Link as SubMenuLink } from "@radix-ui/react-navigation-menu";
import { styled } from "styled-components";
import _partition from "lodash/partition";
import { LayoutProps, PositionProps, layout as _layout, position } from "styled-system";

import {
  enterFromLeftAnimation,
  enterFromRightAnimation,
  exitToLeftAnimation,
  exitToRightAnimation,
} from "../../../../util/animationToolkit";

import { SubMenuItem, SubMenuLayout } from "./types";
import { Grid, GridProps } from "../../../Box";
import { Text } from "../../../Text";

export const SubMenuContainer = styled(Content)<LayoutProps & PositionProps>`
  ${position}
  ${_layout}
  animation-duration: 250ms;
  animation-timing-function: ease;
  &[data-motion="from-start"] {
    animation-name: ${enterFromLeftAnimation};
  }
  &[data-motion="from-end"] {
    animation-name: ${enterFromRightAnimation};
  }
  &[data-motion="to-start"] {
    animation-name: ${exitToLeftAnimation};
  }
  &[data-motion="to-end"] {
    animation-name: ${exitToRightAnimation};
  }
`;

export const SubMenuContent = styled(Grid)<GridProps>`
  list-style: none;
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

export const ItemLink = styled.a`
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;
  &:focus {
    box-shadow: 0 0 0 2px hsl(250 46.8% 38.9%);
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.cardBorder};
  }
`;

const ListItem = React.forwardRef<HTMLAnchorElement, SubMenuItem>(({ label, description, href }, forwardedRef) => {
  return (
    <li>
      <SubMenuLink asChild>
        <ItemLink href={href} ref={forwardedRef}>
          <Text bold color="text">
            {label}
          </Text>
          <Text as="p" color="textSubtle">
            {description}
          </Text>
        </ItemLink>
      </SubMenuLink>
    </li>
  );
});

export interface Props {
  items: SubMenuItem[];
  layout?: SubMenuLayout;
}

const SubMenu: FC<Props> = ({ items, layout = SubMenuLayout.Default }) => {
  const subMenuItems = layout === SubMenuLayout.Default ? items : _partition(items, "Component");

  const SubMenuItems = useMemo(() => {
    if (layout === SubMenuLayout.Emphatized && Array.isArray(subMenuItems[0])) {
      const EmphatizedComponent = subMenuItems[0].pop()?.Component;
      const NormalItems = subMenuItems[1] as SubMenuItem[];

      return [
        <li style={{ gridRow: "span 3" }}>
          <SubMenuLink asChild>{EmphatizedComponent}</SubMenuLink>
        </li>,
      ].concat(NormalItems.map((item: SubMenuItem) => <ListItem {...item} />));
    }

    return items.map((item: SubMenuItem) => <ListItem {...item} />);
  }, [items, layout, subMenuItems]);

  return (
    <SubMenuContainer position="absolute" top={0} left={0} width="auto">
      <SubMenuContent as="ul" p={22} m={0} gridColumnGap="10px" width="600px" data-variant={layout}>
        {SubMenuItems}
      </SubMenuContent>
    </SubMenuContainer>
  );
};

SubMenu.defaultProps = {
  layout: SubMenuLayout.Default,
};

export default memo(SubMenu);
