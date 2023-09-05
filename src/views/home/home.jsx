import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/headerMenu/headerMenu'
import Search from '../../components/search/search'
import ProdCard from '../../components/productsCard/prodCard'

const Home = ({data}) => {
  return (
    <div className='home'>
      <HeaderMenu />
      <Search   />

      <div className='home__products'>
        {data.map( (product) => (
          < ProdCard key={product.id} data={product}/>
        ))
        }
      </div>
      
    </div>
  )
}

export default Home