import React from 'react'
import Header from '../components/Header/header.component'
import Introduction from '../components/Introduction/introduction.component'

import {
  HomeContainer
} from './Home.styles'

const Home = () => {
  return (
    <HomeContainer>
        <Header />
        <Introduction />
    </HomeContainer>
  )
}

export default Home