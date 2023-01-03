import React from 'react'

import HomeLogo from '../../assets/logo-home.png'
import CategoryCarousel from '../../components/categoryCarousel'
import { Container, HomeImg } from './styles'

function Home () {
  return (
    <Container>
    <HomeImg src={HomeLogo} alt="logo da home" />
    <CategoryCarousel/>
  </Container>
  )
}
export default Home
