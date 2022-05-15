import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo'>Krishnan Dinesh</a>

      <ul className="permalinks">

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/krishnandinesh/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/krishnandinesh" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/krishnandinesh5" target="_blank"><IoLogoTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Dinesh. All rights reserved</small>
    </div>

    </footer>
  )
}

export default Footer