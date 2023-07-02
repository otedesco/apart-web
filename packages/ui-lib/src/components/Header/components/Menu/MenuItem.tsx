import React from "react";
import { Link as _Link, Trigger as _Trigger, Item as _Item } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { css, styled } from "styled-components";

import { MenuItem as MenuItemType } from "./types";
import SubMenu from "./SubMenu";

export const Item = styled(_Item)``;

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

export const Trigger = styled(_Trigger)`
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

export const Link = styled(_Link)`
  ${actionHandlerStyles}
  display: block;
  text-decoration: none;
`;

const MenuItem = ({ label, href, items = [], external = false, layout }: MenuItemType) => {
  if (Array.isArray(items) && Boolean(items.length)) {
    return (
      <Item>
        <Trigger>
          {label} <CaretDownIcon aria-hidden />
        </Trigger>
        <SubMenu items={items} layout={layout} />
      </Item>
    );
  }

  return (
    <Item>
      <Link href={href}>{label}</Link> {external && <ExternalLinkIcon />}
    </Item>
  );
};

export default MenuItem;
