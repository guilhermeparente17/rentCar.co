import React from 'react'
import Header from '../components/Header/header.component'
import Introduction from '../components/Introduction/introduction.component'

import {
  HomeContainer,
} from './Home.styles'
import Sidebar from '../components/Sidebar/sidebar.component'
import useStore from '../useStore'
import About from '../components/About/about.component'
import Catalogue from '../components/Catalogue/catalogue.component'

const Home = () => {
  const { openSidebar } = useStore();
  return (
    <HomeContainer>
        <Header />
        <Introduction />
        {openSidebar && <Sidebar />}
        <About />
        <Catalogue />
    </HomeContainer>
  )
}

export default Home