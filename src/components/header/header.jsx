import DncLogo from '../../assets/logo-dnc.png'
import './index.scss'



const Header = () => {
  return (
    <div className='header'>
      <img className='header__img' src={DncLogo} alt="" />
    </div>
  )
}

export default Header