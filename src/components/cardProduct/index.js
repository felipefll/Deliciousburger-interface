import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/cartContext'
import { Button } from '../button'
import { Container, Image, ProductName, ProductPrice } from './style'

export function CardProduct ({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
                >
                  dicionar</Button>
            </div>

        </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
