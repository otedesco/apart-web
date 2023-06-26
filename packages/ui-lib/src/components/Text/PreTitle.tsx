import React, { PropsWithChildren } from "react";
import Text from "./Text";
import { TextProps } from "./types";

export function PreTitle(props: PropsWithChildren<TextProps>) {
  return <Text color="secondary" fontSize="12px" bold textTransform="uppercase" {...props} />;
}
