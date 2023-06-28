import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";

const LinkExternal = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link external {...props}>
      {children}
    </Link>
  );
}

export default LinkExternal;
