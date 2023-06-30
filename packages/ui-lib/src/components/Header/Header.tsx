import { useEffect, useState } from "react";
import { useIsMounted } from "hooks";
import { Wrapper } from "./styles";
import { Flex } from "../Box";
import { HeaderLogo } from "./components/Logo";
import { Menu } from "./components/Menu";

const Header = ({ linkComponent, banner, links = [], activeItem, activeSubItem }: any) => {
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
      <Flex as="header" flexDirection="row" alignItems="center" width={1} m="auto" px="24px">
        <HeaderLogo href="/" />
        <Menu />
        <Flex alignItems="center" flex="1 1" justifyContent="center">
          bar
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
