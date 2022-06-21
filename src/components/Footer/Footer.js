import React from 'react'
import './Footer.css'
import {BsFacebook,BsPinterest, BsTwitter, BsInstagram} from 'react-icons/bs'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to='/' className='footer__logo'>fakeShop</Link>
      <ul className="footer__list">
        <li className="footer__item">Categories</li>
        <li className="footer__item"><Link to='/products/all'>All</Link></li>
          <li className="footer__item"><Link to='/products/men'>Men</Link></li>
          <li className="footer__item"><Link to='/products/women'>Women</Link></li>
          <li className="footer__item"><Link to='/products/collection'>New Collection</Link></li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">Company</li>
        <li className="footer__item"><a href="#">About us</a></li>
        <li className="footer__item"><a href="#">Contact us</a></li>
        <li className="footer__item"><a href="#">Privacy policy</a></li>
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