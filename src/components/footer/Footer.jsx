import React from 'react';
import "./footer.css";
import { BsWhatsapp } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"


const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>ARAVIND</a>

      <ul className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.whatsapp.com'><BsWhatsapp /></a>
        <a href='https://www.instagram.com'><BsInstagram /></a>
        <a href='https://www.facebook.com'><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</small>
      </div>
    </footer>
  )
}

export default Footer
