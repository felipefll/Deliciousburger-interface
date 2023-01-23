import { PropTypes } from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './listProducts'
import Orders from './orders'
import { Container, ContainerItems } from './styles'

export function Admin ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
