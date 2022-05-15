import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'
import { useRef } from 'react';

import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6024wg', 'template_qosmc0h', form.current, 'bgyndUuhv7nN-A8E0')

    e.target.reset();

  };

  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>krishnandinesh.kk@gmail.com</h5>
            <a href="mailto:krishnandinesh.kk.com" target="_blank">Send an Email</a>
          </article>

          <article className='contact__option'>
            <RiInstagramLine className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>Krishnan Dinesh</h5>
            <a href="https://www.instagram.com/krishnan_dinesh/" target="_blank">Send a Message</a>
          </article>

        </div>

        {/* END OF CONTACT OPTIONS  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />

          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default Contact