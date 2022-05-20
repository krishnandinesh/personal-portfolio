import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>

      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Krishnan Dinesh</h1>
        <h5 className='text-light'>Front-end Developer</h5>

        <CTA/>

        <HeaderSocials/>

        <a href="#footer" className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header