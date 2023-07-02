import React from "react";

export enum SubMenuLayout {
  Default = "default",
  Emphatized = "emphatized",
}

export type SubMenuItem = {
  href: "/";
  label?: string;
  description?: string;
  Component?: React.ReactNode;
};

export type MenuItem = {
  label: string;
  href?: string;
  external?: boolean;
  description?: string;
  items?: SubMenuItem[];
  layout?: SubMenuLayout;
};
