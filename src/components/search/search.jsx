import React from 'react'
import Lupa from '../../assets/searc-icon.png'
import Profile from '../../assets/profile.png'
import Fav from '../../assets/heart.png'
import './index.scss'

const Search = () => {
  return (
    <section className='search'>
      <div className='search__inputContainer'>
        <img id='lupa' src={Lupa} alt="" />
        <input type="text" placeholder='O que você está procurando?' />
      </div>

      <div className='search__icons'>
        <img src={Profile} alt="" />
        <img src={Fav} alt="" />
      </div>
    </section>
  )
}

export default Search