import { PropTypes } from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './listProducts'
import NewProduct from './newProduct'
import Orders from './orders'
import { Container, ContainerItems } from './styles'

export function Admin ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
