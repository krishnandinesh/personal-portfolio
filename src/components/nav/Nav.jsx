import React from 'react'
import './nav.css'
import Scrollspy from 'react-scrollspy'


import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav]=useState('#home')
  return (
    <Scrollspy items={['home', 'about', 'experience', 'portfolio', 'contact']} className='nav' currentClassName="active">
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about"onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
      <a href="#portfolio"onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </Scrollspy>
    
    )
}

export default Nav