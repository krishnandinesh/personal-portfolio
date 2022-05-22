import React from 'react'
import './portfolio.css'

import IMG19 from '../../assets/project19.jpg'
import IMG18 from '../../assets/project18.jpg'
import IMG17 from '../../assets/project17.jpg'
import IMG16 from '../../assets/project16.jpg'
import IMG8 from '../../assets/project8.jpg'
import IMG7 from '../../assets/project7.jpg'
import IMG6 from '../../assets/project6.jpg'
import IMG4 from '../../assets/project4.jpg'


const data = [
  {
    id: 1,
    image: IMG19,
    title: 'Model Portfolio using React',
    github: 'https://github.com/krishnandinesh/portfolio',
    demo: 'https://model-portfolio-2cae7.web.app/'
  },
  {
    id: 2,
    image: IMG18,
    title: 'Eddie Home Page',
    github: 'https://github.com/krishnandinesh/edie_homepage',
    demo: 'https://krishnandinesh.github.io/edie_homepage/'
    },
  {
    id: 3,
    image: IMG17,
    title: 'Checkout Page',
    github: 'https://github.com/krishnandinesh/checkoutpage',
    demo: 'https://krishnandinesh.github.io/checkoutpage/'
  },
  {
    id: 4,
    image: IMG16,
    title: 'Recipe Page',
    github: 'https://github.com/krishnandinesh/recipepage',
    demo: 'https://krishnandinesh.github.io/recipepage/'
  },
  {
    id: 12,
    image: IMG8,
    title: 'Weather App',
    github: 'https://github.com/krishnandinesh/Weather-app',
    demo: 'https://krishnandinesh.github.io/Weather-app/'
  },
  {
    id: 13,
    image: IMG7,
    title: 'Black Jack',
    github: 'https://github.com/krishnandinesh/black-jack',
    demo: 'https://krishnandinesh.github.io/black-jack/'
  },
  {
    id: 14,
    image: IMG6,
    title: 'Flint Pharmaceuticals',
    github: 'https://github.com/krishnandinesh/Flint-Pharmaceuticals',
    demo: 'https://krishnandinesh.github.io/Flint-Pharmaceuticals/'
  },
  {
    id: 16,
    image: IMG4,
    title: 'To-do list',
    github: 'https://github.com/krishnandinesh/To-do-list',
    demo: 'https://krishnandinesh.github.io/To-do-list/'
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (

              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      <a href="https://github.com/krishnandinesh?tab=repositories" target='_blank' className='portfolio__redirect'>See more</a>

      </div>
    </section>
  )
}

export default Portfolio