import { FC, useEffect, useState } from "react";
import { useIsMounted } from "hooks";
import { Wrapper } from "./styles";
import { Box, Flex } from "../Box";
import { HeaderLogo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/Menu/types";
import { Search } from "./components/Search";

export interface Props {
  links: MenuItem[];
  linkComponent: any;
  banner: any;
  activeItem: any;
  activeSubItem: any;
}

const Header: FC<Props> = ({ linkComponent, banner, links = [], activeItem, activeSubItem }) => {
  const [isTopOffPage, setIsTopOffPage] = useState(true);
  const isMounted = useIsMounted();
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const isTopOfPage = currentOffset === 0;

      setIsTopOffPage(isTopOfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  return (
    <Wrapper $isTransparent={isTopOffPage}>
      <Flex
        as="header"
        width="calc(1200px + calc(2 * 24px))"
        flexDirection="row"
        alignItems="center"
        m="auto"
        px="24px"
      >
        <HeaderLogo href="/" />
        <Menu items={links} />
        <Flex alignItems="center" flex="1 1" justifyContent="center">
          <Search />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
