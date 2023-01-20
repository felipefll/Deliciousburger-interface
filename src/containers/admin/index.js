import React from 'react'

import { SideMenuAdmin } from '../../components'
import Orders from './orders'
import { Container } from './styles'

export function Admin () {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  )
}
