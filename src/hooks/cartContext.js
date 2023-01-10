import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProdutcs] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('deliciousburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProdutcs(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProdutcs(newCartProducts)
    }
    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCartProdutcs(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProdutcs(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProdutcs(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
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
    <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}>
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
