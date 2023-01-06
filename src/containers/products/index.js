import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.png'
import CardProduct from '../../components/cardProduct'
import api from '../../services/api'
import formartCurrency from '../../utils/formatCurrency'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'

function Products () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data: allproducts } = await api.get('products')

      const newProducts = allproducts.map(product => {
        return { ...product, formatedPrice: formartCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])
  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo de products" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>))}
      </CategoriesMenu>
      <ProductsContainer>
        {products && products.map(product => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
export default Products
