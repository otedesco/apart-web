import React, { PropsWithChildren, memo } from "react";

import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { useMatchBreakpoints } from "../../../contexts";
import { SocialLinkType } from "../types";

const iconProps = {
  width: "25",
  height: "25",
};

export type SocialLinksProps = FlexProps & {
  socials: SocialLinkType[];
};

const SocialLinks = ({ socials, ...props }: PropsWithChildren<SocialLinksProps>) => {
  const { isMobile } = useMatchBreakpoints();
  const calculateMarginRight = (idx: number) => {
    if (idx === socials.length - 1) {
      return 0;
    }
    return isMobile ? "16px" : "24px";
  };

  const socialsIcons = () =>
    socials.map((social, index) => {
      const Icon = social.icon;
      const mr = calculateMarginRight(index);
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr} p="6px">
          <Icon {...iconProps} />
        </Link>
      );
    });

  return <Flex {...props}>{socialsIcons()}</Flex>;
};

export default memo(SocialLinks);
