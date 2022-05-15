import React from 'react'
import './about.css'

import ME from '../../assets/me.jpg'

import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">

      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years of Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

          </div>

          <p>Aspiring Front-end Developer with a CS degree and the ability to collaborate effectively with senior developers and ensure strict compliance with all applicable deadlines.
            Looking for an opportunity to exhibit my talents as a Front End developer, get introduced to new technologies, and broaden my knowledge in that domain.</p>


        </div>

      </div>

    </section>
  )
}

export default About