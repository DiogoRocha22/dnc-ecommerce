import React from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/headerMenu/headerMenu'
import Search from '../../components/search/search'
import ProductDetail from '../../components/productDetail/productDetail'

const Products = ({data}) => {
  const { productId } = useParams()
  const selectedProduct = data.find((product) => product.id == productId)
  
  return (
    <div>
        <HeaderMenu />
        <Search />
        <ProductDetail data={selectedProduct}/>
        
    </div>
  )
}

export default Products