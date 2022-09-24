import React from 'react'
import HeaderButton from './Buttons'
import './header.css'
import image from '../../assets/me1.png'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='title'>Abdessamad Berahhou</h1>
        <h5 className='text-light'>Mobile/Web Developer</h5>
        <HeaderButton />
        <SocialMedia />
        <div className="me">
          <img src={image} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header