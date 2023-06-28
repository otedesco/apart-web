import { useMemo, useState } from "react";
import { AtomBox } from "ui/components/AtomBox";
import { useIsMounted } from "hooks";
import { HeaderContext } from "./context";
import { FixedContainer, StyledNav, TopBannerContainer, Wrapper } from "./styles";
import { useMatchBreakpoints } from "../../contexts";
import { MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { Flex } from "../Box";
import Logo from "./components/Logo";

const Header = ({ linkComponent, banner, links = [] }: any) => {
  const { isMobile } = useMatchBreakpoints();
  const isMounted = useIsMounted();
  const [showMenu, setShowMenu] = useState(true);

  const homeLink = links.find((link: any) => link.label === "Home");
  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;
  const totalTopMenuHeight = isMounted && banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;

  const providerValue = useMemo(() => ({ linkComponent }), [linkComponent]);
  return (
    <HeaderContext.Provider value={providerValue}>
      <AtomBox
        asChild
        minHeight={{
          xs: "auto",
          md: "100vh",
        }}
      >
        <Wrapper>
          <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
            {banner && isMounted && <TopBannerContainer height={topBannerHeight}>{banner}</TopBannerContainer>}
            <StyledNav>
              <Flex>
                <Logo href={homeLink?.href ?? "/"} />
              </Flex>
            </StyledNav>
          </FixedContainer>
        </Wrapper>
      </AtomBox>
    </HeaderContext.Provider>
  );
};

export default Header;
