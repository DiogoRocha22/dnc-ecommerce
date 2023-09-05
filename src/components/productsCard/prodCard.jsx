import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const ProdCard = ({ data }) => {
  
  return (
    <div className='card'>
      <img src={data.imgPath} alt="" />
      
      <div className='card__details'>
        <p>{data.title}</p>
        <Link to={'/products/' + data.id}><button>
          COMPRAR LOOK
        </button></Link>
      </div>
    </div>
  )
}

export default ProdCard