import React from 'react'

import HomeLogo from '../../assets/logo-home.png'
import CategoryCarousel from '../../components/categoryCarousel'
import OffersCarousel from '../../components/offersCarousel'
import { Container, HomeImg } from './styles'

function Home () {
  return (
    <Container>
    <HomeImg src={HomeLogo} alt="logo da home" />
    <CategoryCarousel/>
    <OffersCarousel/>
  </Container>
  )
}
export default Home
