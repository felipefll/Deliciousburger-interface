import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './cartContext'
import { UserProvider } from './UserContext'
const AppProvider = ({ children }) => (

  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)
AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
