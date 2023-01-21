import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './listProducts'
import Orders from './orders'
import { Container, ContainerItems } from './styles'

export function Admin () {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        <Orders />
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
