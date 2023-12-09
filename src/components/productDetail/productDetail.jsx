import React from 'react'
import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = ({data}) => {
     
    const [color, setColor] = useState(data.colors[0])
    const [size, setSize] = useState(data.sizes[0])

    return (
    <div className='productDetail'>
        <div className='productDetail__left'>
            <div className='productDetail__card'>
                <img src={data.imgPathDetail} alt="" />
                <p>{data.title}</p>
            </div>
            
            <h3>Descrição</h3>
            <p>{data.title}</p>
            <div className='line_left'></div>
        </div>
        
        <div className='productDetail__right'>
            <h1>Informações sobre o Produto</h1>
            <div className='line'></div>
            <div className='productDetail__choose'>
                <h1>{data.price}</h1>
                
                <div className='productDetail__cubeColors'>
                    
                    <p style={{ textTransform: 'capitalize'}} >Cor: {color}</p>
                    
                    {data.colors.map((cores, index) => (
                        <button key={index} onClick={() => {
                            setColor(cores)
                        }} 
                        style={{
                            margin: '10px 20px 10px 0px' ,
                            width: '64px',
                            height: '55px',
                            backgroundColor: cores,
                            border:'1px solid gray',
                            borderRadius:'10px',
                            cursor: 'pointer'
                        }}>
                        </button>     
                    ))}
                </div>

                <div className='productDetail__sizes'>
                    <p>Tamanho: {size.toUpperCase()}</p>

                    {data.sizes.map((clothSize, index) => (
                        <button key={index} onClick={() => {
                            setSize(clothSize)
                        }}
                        style={{
                            margin: '10px 20px 10px 0px' ,
                            width: '64px',
                            height: '55px',
                            border:'1px solid gray',
                            borderRadius:'10px',
                            fontSize: '25px',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        }}>
                        {clothSize.toUpperCase()}</button>
                        ))}
                </div>

                <Link to={'/pay/' + data.id}><button className='productDetail__finalize'>Finalizar Compra</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail


