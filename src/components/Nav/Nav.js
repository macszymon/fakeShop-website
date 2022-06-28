import React, { useState, useEffect } from 'react';
import './Nav.css';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Nav({cartItems}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('')

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault()
    setSearch('')
    navigate('/search/'+search)
  }

  return (
    <nav className='nav'>
      <div className='nav__main'>
        <form className='nav__form' onSubmit={e => handleSubmit(e)}>
          <AiOutlineSearch size={22} />
          <input className='nav__input' type='text' value={search} onChange={e => setSearch(e.target.value)} />
        </form>
        <Link to='/' className='nav__logo'>
          fakeShop
        </Link>
        <div className='nav__icons'>
          <Link to='/favourites'><AiOutlineHeart size={22}/></Link>
          <Link className='nav-cart__icon' to='/cart'><AiOutlineShoppingCart size={22}/>{cartItems > 0 && <span className='nav-cart__notification'>{cartItems}</span>}</Link>
          <AiOutlineMenu
            className='nav__hamburger'
            size={22}
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
            <Link to='/products/sale/all'>Sale</Link>
            <ul className='nav__item-more'>
            <li>
                  <Link to='/products/sale/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/sale/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/sale/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/sale/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/sale/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/sale/accessories'>Accessories</Link>
                </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/men/all'>Men</Link>
            <ul className='nav__item-more'>
              <li>
                <Link to='/products/men/all'>All</Link>
              </li>
              <li>
                <Link to='/products/bestsellers/men'>Bestsellers</Link>
              </li>
              <li>
                <Link to='/products/men/top'>Tops</Link>
              </li>
              <li>
                <Link to='/products/men/bottom'>Bottoms</Link>
              </li>
              <li>
                <Link to='/products/men/full-body'>Full Body</Link>
              </li>
              <li>
                <Link to='/products/men/shoes'>Shoes</Link>
              </li>
              <li>
                <Link to='/products/men/accessories'>Accessories</Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/women/all'>Women</Link>
            <ul className='nav__item-more'>
              <li>
                <Link to='/products/women/all'>All</Link>
              </li>
              <li>
                <Link to='/products/bestsellers/women'>Bestsellers</Link>
              </li>
              <li>
                <Link to='/products/women/top'>Tops</Link>
              </li>
              <li>
                <Link to='/products/women/bottom'>Bottoms</Link>
              </li>
              <li>
                <Link to='/products/women/full-body'>Full Body</Link>
              </li>
              <li>
                <Link to='/products/women/shoes'>Shoes</Link>
              </li>
              <li>
                <Link to='/products/women/accessories'>Accessories</Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/products/collection/all'>New Collection</Link>
            <ul className='nav__item-more'>
            <li>
                  <Link to='/products/collection/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/collection/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/collection/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/collection/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/collection/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/collection/accessories'>Accessories</Link>
                </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link to='/magazine'>Magazine</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className='nav__categories-mobile'>
          <ul className='nav__list-mobile'>
            <li className='nav__item-mobile'>
              <Link to='/'>Home</Link>
            </li>
            <li
              className='nav__item-mobile'
              onClick={(e) => e.target.classList.toggle('mobile-open')}
            >
              Sale
              <ul className='nav__item-more-mobile'>
              <li>
                  <Link to='/products/sale/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/sale/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/sale/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/sale/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/sale/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/sale/accessories'>Accessories</Link>
                </li>
              </ul>
            </li>
            <li
              className='nav__item-mobile'
              onClick={(e) => e.target.classList.toggle('mobile-open')}
            >
              Men
              <ul className='nav__item-more-mobile'>
                <li>
                  <Link to='/products/men/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/bestsellers/men'>Bestsellers</Link>
                </li>
                <li>
                  <Link to='/products/men/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/men/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/men/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/men/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/men/accessories'>Accessories</Link>
                </li>
              </ul>
            </li>
            <li
              className='nav__item-mobile'
              onClick={(e) => e.target.classList.toggle('mobile-open')}
            >
              Women
              <ul className='nav__item-more-mobile'>
                <li>
                  <Link to='/products/women/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/bestsellers/women'>Bestsellers</Link>
                </li>
                <li>
                  <Link to='/products/women/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/women/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/women/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/women/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/women/accessories'>Accessories</Link>
                </li>
              </ul>
            </li>
            <li
              className='nav__item-mobile'
              onClick={(e) => e.target.classList.toggle('mobile-open')}
            >
              New Collection
              <ul className='nav__item-more-mobile'>
              <li>
                  <Link to='/products/collection/all'>All</Link>
                </li>
                <li>
                  <Link to='/products/collection/top'>Tops</Link>
                </li>
                <li>
                  <Link to='/products/collection/bottom'>Bottoms</Link>
                </li>
                <li>
                  <Link to='/products/collection/full-body'>Full Body</Link>
                </li>
                <li>
                  <Link to='/products/collection/shoes'>Shoes</Link>
                </li>
                <li>
                  <Link to='/products/collection/accessories'>Accessories</Link>
                </li>
              </ul>
            </li>
            <li className='nav__item-mobile'>
              <Link to='/magazine'>Magazine</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
