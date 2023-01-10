import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import Offers from '../../assets/oferta.png'
import { useCart } from '../../hooks/cartContext'
import api from '../../services/api'
import formartCurrency from '../../utils/formatCurrency'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export function OffersCarousel () {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer).map(product => {
        return { ...product, formatedPrice: formartCurrency(product.price) }
      })

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo da oferta" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoint}
      >
        {
          offers && offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto do produto" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))
        }
      </Carousel>
    </Container>
  )
}
