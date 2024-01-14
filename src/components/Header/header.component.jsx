import React from 'react'

import {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderLink,
    HeaderButton,
    HeaderIconMenu,
    Menu
} from './header.styles'
import useStore from '../../useStore';

const Header = () => {
  const { setOpenSidebar } = useStore();
  return (
    <HeaderContainer>
        <HeaderLogo>RentCar.co</HeaderLogo>

        <HeaderNav>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>About</HeaderLink>
            <HeaderLink>Catalogue</HeaderLink>
            <HeaderLink>Contact Us</HeaderLink>
            <HeaderButton>Sign In</HeaderButton>
        </HeaderNav>

        <HeaderIconMenu onClick={() => setOpenSidebar(true)}>
          <Menu size="24" />
        </HeaderIconMenu>
    </HeaderContainer>
  )
}

export default Header