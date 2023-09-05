import React from 'react' 
import Header from '../../components/header/header'
import './index.scss'
import { useState } from 'react'

const Login = () => {
  const [dados, setDados] = useState({
    name: null,
    password: null
  })

  
  return (
    <section className='login'>
      <Header/>
      <div className='container'>
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <p>você pode entrar com seu CPF</p>
        
        <form action='/home'>
          
          <label htmlFor="cpf">Digite seu CPF:</label>
          <input required onChange={(event) => {
            const senha = event.target.value
            setDados({...dados, name: senha})
          }} type="text" placeholder='Nome Completo' id='name' className='login_input-name'/>

          <label htmlFor="password">Senha:</label>
          <input required onChange={(e) => {
            setDados({...dados, password: e.target.value})
          }} type="password" placeholder='**************' />

          <button onClick={() => {
            console.log(dados)
          }} type='submit'>ENTRAR</button>
          
        </form>
      </div>
      
    </section>
  )
}

export default Login