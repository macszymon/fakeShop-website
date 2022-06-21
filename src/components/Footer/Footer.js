import React from 'react'
import './Footer.css'
import {BsFacebook,BsPinterest, BsTwitter, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <span className='footer__logo'>fakeShop</span>
      <ul className="footer__list">
        <li className="footer__item">Categories</li>
        <li className="footer__item"><a href="#">All</a></li>
        <li className="footer__item"><a href="#">Men</a></li>
        <li className="footer__item"><a href="#">Women</a></li>
        <li className="footer__item"><a href="#">Summer collection</a></li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">Company</li>
        <li className="footer__item"><a href="#">About us</a></li>
        <li className="footer__item"><a href="#">Contact us</a></li>
        <li className="footer__item"><a href="#">Privacy</a></li>
        <li className="footer__item"><a href="#">Return policy</a></li>
      </ul>
      <ul className="footer__list ">
        <li className="footer__item">Socials</li>
        <ul className='footer__list--socials'>
        <li className="footer__item"><a href="#"><BsFacebook size={24}/></a></li>
        <li className="footer__item"><a href="#"><BsInstagram size={24}/></a></li>
        <li className="footer__item"><a href="#"><BsTwitter size={24}/></a></li>
        <li className="footer__item"><a href="#"><BsPinterest size={24}/></a></li>
        </ul>
      </ul>
    </footer>
  )
}

export default Footer