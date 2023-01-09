import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduts, setCartProdutcs] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProduts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProduts

      newCartProducts[cartIndex].quantity =
      newCartProducts[cartIndex].quantity + 1

      setCartProdutcs(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProduts, product]
      setCartProdutcs(newCartProducts)
    }
    await localStorage.setItem('deliciousburger:cartInfo', JSON.stringify(newCartProducts))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('deliciousburger:cartInfo')

      if (clientCartData) {
        setCartProdutcs(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductInCart, cartProduts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
