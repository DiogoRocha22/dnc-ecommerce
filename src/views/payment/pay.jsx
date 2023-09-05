import React from 'react'
import Header from '../../components/header/header'
import { useParams } from 'react-router-dom'
import './index.scss'

function Pay({data}) {
  const  {payId} = useParams()
  const selectProduct = data.find((product) => product.id == payId) 

  return (
    <div>
        <Header/>

        <div className='payment'>
          <section className='payment__left'>
            <form onSubmit={() => {
              alert('Você efetuou a compra!')
            }} action="/home">
              <label>Nome:</label>
              <input type="text" className='payment__input-text' required placeholder='Nome Completo'/>

              <label>Endereço de entrega:</label>
              <input type="text" className='payment__input-text' required placeholder='Endereço de entrega'/>

              <label>Forma de Pagamento:</label>
              
              <div>
              <input type="radio" className='payment__input-radio' required name='pay_form' value='Pix'/><span>Pix</span>
              </div>
              <div>
              <input type="radio" className='payment__input-radio' required name='pay_form' value='CartãoDeCredito' /><span>Cartão de Crédito</span>
              </div>
              <div>
              <input type="radio" className='payment__input-radio' required name='pay_form' value='Boleto'/><span>Boleto</span>
              </div>

             <button  type='submit'>Enviar Pedido</button>
            </form>
          </section>

          <div className='payment__right'>
            <div className='payment__total'>
              <h2>Resumo do pedido: </h2>
              <div className='payment__total-div'>
                <p>Produtos(1):</p> <h3>{selectProduct.price}</h3>
              </div>
              <div className='payment__line'></div>
              <div className='payment__total-div'>
                <p>Total:</p><h3>{selectProduct.price}</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pay