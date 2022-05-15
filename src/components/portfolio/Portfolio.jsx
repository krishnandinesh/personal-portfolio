import React from 'react'
import './portfolio.css'

import IMG19 from '../../assets/project19.jpg'
import IMG18 from '../../assets/project18.jpg'
import IMG17 from '../../assets/project17.jpg'
import IMG16 from '../../assets/project16.jpg'
import IMG15 from '../../assets/project15.jpg'
import IMG14 from '../../assets/project14.jpg'
import IMG13 from '../../assets/project13.jpg'
import IMG12 from '../../assets/project12.jpg'
import IMG11 from '../../assets/project11.jpg'
import IMG10 from '../../assets/project10.jpg'
import IMG9 from '../../assets/project9.jpg'
import IMG8 from '../../assets/project8.jpg'
import IMG7 from '../../assets/project7.jpg'
import IMG6 from '../../assets/project6.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG1 from '../../assets/project1.jpg'


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
    id: 5,
    image: IMG15,
    title: 'Interior Consultant',
    github: 'https://github.com/krishnandinesh/interior-consultant',
    demo: 'https://krishnandinesh.github.io/interior-consultant/'
  },
  {
    id: 6,
    image: IMG14,
    title: 'My Team',
    github: 'https://github.com/krishnandinesh/My-team',
    demo: 'https://krishnandinesh.github.io/My-team/'
  },
  {
    id: 7,
    image: IMG13,
    title: 'Gallery',
    github: 'https://github.com/krishnandinesh/gallery',
    demo: 'https://krishnandinesh.github.io/gallery/'
  },
  {
    id: 8,
    image: IMG12,
    title: '404 Error',
    github: 'https://github.com/krishnandinesh/404-Error',
    demo: 'https://krishnandinesh.github.io/404-Error/'
  },
  {
    id: 9,
    image: IMG11,
    title: 'Huddle Landing Page',
    github: 'https://github.com/krishnandinesh/huddle-landing_page',
    demo: 'https://krishnandinesh.github.io/huddle-landing_page/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'NFT Card',
    github: 'https://github.com/krishnandinesh/nft-card',
    demo: 'https://krishnandinesh.github.io/nft-card/'
  },
  {
    id: 11,
    image: IMG9,
    title: 'QR Code Card',
    github: 'https://github.com/krishnandinesh/QR_code',
    demo: 'https://krishnandinesh.github.io/QR_code/'
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
    id: 15,
    image: IMG5,
    title: 'Model Portfolio',
    github: 'https://github.com/krishnandinesh/Model-Portfolio',
    demo: 'https://krishnandinesh.github.io/Model-Portfolio/'
  },
  {
    id: 16,
    image: IMG4,
    title: 'To-do list',
    github: 'https://github.com/krishnandinesh/To-do-list',
    demo: 'https://krishnandinesh.github.io/To-do-list/'
  },
  {
    id: 17,
    image: IMG3,
    title: 'Technical Documentation Page',
    github: 'https://github.com/krishnandinesh/Technical-Documentation-page',
    demo: 'https://krishnandinesh.github.io/Technical-Documentation-page/'
  },
  {
    id: 18,
    image: IMG2,
    title: 'Landing Page',
    github: 'https://github.com/krishnandinesh/Landing-Page',
    demo: 'https://krishnandinesh.github.io/Landing-Page/'
  },
  {
    id: 19,
    image: IMG1,
    title: 'Tribute Page',
    github: 'https://github.com/krishnandinesh/Tribute-page',
    demo: 'https://krishnandinesh.github.io/Tribute-page/'
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

      </div>
    </section>
  )
}

export default Portfolio