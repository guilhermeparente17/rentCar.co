import React from 'react'

import {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderLink,
    HeaderButton
} from './header.styles'

const Header = () => {
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
    </HeaderContainer>
  )
}

export default Header