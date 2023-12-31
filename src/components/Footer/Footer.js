import React from 'react';
import './Footer.css';
import {
  BsFacebook,
  BsPinterest,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__flex'>
        <Link to='/' className='footer__logo'>
          fakeShop
        </Link>
        <ul className='footer__list'>
          <li className='footer__item'>Categories</li>
          <li className='footer__item'>
            <Link to='/products/both/all/sale'>Sale</Link>
          </li>
          <li className='footer__item'>
            <Link to='/products/men/all'>Men</Link>
          </li>
          <li className='footer__item'>
            <Link to='/products/women/all'>Women</Link>
          </li>
          <li className='footer__item'>
            <Link to='/products/both/all/collection'>New collection</Link>
          </li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__item'>Company</li>
          <li className='footer__item'>
            <Link to='/company/about-us' >About us</Link>
          </li>
          <li className='footer__item'>
            <Link to='/magazine'>Magazine</Link>
          </li>
          <li className='footer__item'>
            <Link to='/company/faqs'>FAQs</Link>
          </li>
          <li className='footer__item'>
            <Link to='/company/contact'>Contact us</Link>
          </li>
          <li className='footer__item'></li>
        </ul>
        <ul className='footer__list '>
          <li className='footer__item'>Socials</li>
          <ul className='footer__list--socials'>
            <li className='footer__item'>
              <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                <BsFacebook size={24} />
              </a>
            </li>
            <li className='footer__item'>
              <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                <BsInstagram size={24} />
              </a>
            </li>
            <li className='footer__item'>
              <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                <BsTwitter size={24} />
              </a>
            </li>
            <li className='footer__item'>
              <a href='https://pinterest.com' target='_blank' rel="noreferrer">
                <BsPinterest size={24} />
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div className='footer__copy'>
        <p>&copy; fakeShop 2022</p>
        <p>Made by Szymon Makiewicz all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
