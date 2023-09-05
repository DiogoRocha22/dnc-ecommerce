import React from 'react'
import Cart from '../../assets/cart.png'
import DncLogo from '../../assets/logo-dnc.png'
import './index.scss'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  return (
  <header className='header-menu'>
    <img className='header-menu__logo' src={DncLogo} alt="logo DNC" />
    <ul>
      <li><Link to={'/home'}>Home</Link></li>
      <li>Novidades</li>
      <li>Feminino</li>
      <li>Masculino</li>
      <li>Atendimento</li>
    </ul>

    <div className='header-menu__cart'>
      <h2>Meu Carrinho</h2>
      <img className='header-menu__cart-img' src={Cart} alt="CART" />
    </div>
  </header>
  )
}

export default HeaderMenu