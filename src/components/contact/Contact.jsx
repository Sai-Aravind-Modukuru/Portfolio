import React from 'react';
import './contact.css';
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr"
import { BsWhatsapp } from "react-icons/bs"
// import { useRef as UseRef } from 'react';
// import {emailjs} from '';


const contact = () => {
  // const form = UseRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_hc2hqr7', 'template_elmwu5w', form.current, 'KXSAONOcV9VtgjMPy')
  // };


  return (
    <section id='contact'>

      <h5 className='head_1'>Get In Touch</h5>
      <h2 className='head_2'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>saiaravind.modukuru@gmail.com</h5>
            <a href="mailto:saiaravind.modukuru@gmail.com" target='blank'>Send a mail</a>
          </article>

          <article className='contact__option'>
            <GrInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>_saiaravind._</h5>
            <a href="https://www.instagram.com/" target='blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91-9573111070</h5>
            <a href="https://whatsapp.com" target='blank'>Send a message</a>
          </article>
        </div>
        <form >
          <input type='text' name="name" placeholder='Your Full Name' />
          <input type='email' name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact;
