import React from 'react'

import {
    SidebarContainer,
    SidebarContent,
    SidebarTitle,
    SidebarNav,
    SidebarLink,
    SidebarButton,
    SidebarClose,
    SidebarWrap
} from './sidebar.styles';
import useStore from '../../useStore';

const Sidebar = () => {
    const { setOpenSidebar } = useStore();
  return (
    <SidebarContainer>
        {<SidebarContent>
            <SidebarWrap>
                <SidebarClose onClick={() => setOpenSidebar(false)}>X</SidebarClose>
            </SidebarWrap>
            <SidebarTitle>RentCar</SidebarTitle>

            <SidebarNav>
                <SidebarLink>Home</SidebarLink>
                <SidebarLink>About</SidebarLink>
                <SidebarLink>Catalogue</SidebarLink>
                <SidebarLink>Contact Us</SidebarLink>
                <SidebarButton>Sign In</SidebarButton>
            </SidebarNav>
        </SidebarContent>}
    </SidebarContainer>
  )
}

export default Sidebar