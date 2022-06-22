import React, { useState } from 'react';
import './Nav.css';
import { IoIosSearch } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='nav'>
      <div className='nav__main'>
        <form className='nav__form'>
          <IoIosSearch size={20} />
          <input className='nav__input' type='text' />
        </form>
        <Link to='/' className='nav__logo'>
          fakeShop
        </Link>
        <div className='nav__icons'>
          <BsCart3 size={20} />
          <VscAccount size={20} />
          <AiOutlineMenu
            className='nav__hamburger'
            size={20}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div className='nav__categories'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav__item'>
            <Link to='/'>Sale</Link>
            <ul className='nav__item-more'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Men</a>
              </li>
              <li>
                <a href=''>Women</a>
              </li>
              </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/men'>Men</Link>
            <ul className='nav__item-more'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Bestsellers</a>
              </li>
              <li>
                <a href=''>New Collection</a>
              </li>
              <li>
                <a href=''>Tops</a>
              </li>
              <li>
                <a href=''>Bottoms</a>
              </li>
              <li>
                <a href=''>Full Body</a>
              </li>
              <li>
                <a href=''>Dresses</a>
              </li>
              <li>
                <a href=''>Shoes</a>
              </li>
              <li>
                <a href=''>Accessories</a>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/women'>Women</Link>
            <ul className='nav__item-more'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Bestsellers</a>
              </li>
              <li>
                <a href=''>New Collection</a>
              </li>
              <li>
                <a href=''>Tops</a>
              </li>
              <li>
                <a href=''>Bottoms</a>
              </li>
              <li>
                <a href=''>Full Body</a>
              </li>
              <li>
                <a href=''>Dresses</a>
              </li>
              <li>
                <a href=''>Shoes</a>
              </li>
              <li>
                <a href=''>Accessories</a>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/collection'>New Collection</Link>
            <ul className='nav__item-more'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Men</a>
              </li>
              <li>
                <a href=''>Women</a>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className='nav__categories-mobile'>
          <ul className='nav__list-mobile'>
            <li className='nav__item-mobile'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav__item-mobile' onClick={(e) => e.target.classList.toggle('mobile-open')}>
              Sale
              <ul className='nav__item-more-mobile'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Men</a>
              </li>
              <li>
                <a href=''>Women</a>
              </li>
              </ul>
            </li>
            <li className='nav__item-mobile' onClick={(e) => e.target.classList.toggle('mobile-open')}>
              Men
              <ul className='nav__item-more-mobile'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Bestsellers</a>
              </li>
              <li>
                <a href=''>New Collection</a>
              </li>
              <li>
                <a href=''>Tops</a>
              </li>
              <li>
                <a href=''>Bottoms</a>
              </li>
              <li>
                <a href=''>Full Body</a>
              </li>
              <li>
                <a href=''>Dresses</a>
              </li>
              <li>
                <a href=''>Shoes</a>
              </li>
              <li>
                <a href=''>Accessories</a>
              </li>
            </ul>
            </li>
            <li className='nav__item-mobile' onClick={(e) => e.target.classList.toggle('mobile-open')}>
              Women
              <ul className='nav__item-more-mobile'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Bestsellers</a>
              </li>
              <li>
                <a href=''>New Collection</a>
              </li>
              <li>
                <a href=''>Tops</a>
              </li>
              <li>
                <a href=''>Bottoms</a>
              </li>
              <li>
                <a href=''>Full Body</a>
              </li>
              <li>
                <a href=''>Dresses</a>
              </li>
              <li>
                <a href=''>Shoes</a>
              </li>
              <li>
                <a href=''>Accessories</a>
              </li>
            </ul>
            </li>
            <li className='nav__item-mobile' onClick={(e) => e.target.classList.toggle('mobile-open')}>
              New Collection
              <ul className='nav__item-more-mobile'>
              <li>
                <a href=''>All</a>
              </li>
              <li>
                <a href=''>Men</a>
              </li>
              <li>
                <a href=''>Women</a>
              </li>
            </ul>
            </li>
            <li className='nav__item-mobile'>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
