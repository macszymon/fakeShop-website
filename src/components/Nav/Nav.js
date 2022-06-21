import React, { useState } from 'react'
import './Nav.css'
import {IoIosSearch} from 'react-icons/io'
import {BsCart3} from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='nav'>
      <div className="nav__main">
        <form className="nav__form">
          <IoIosSearch size={20}/>
          <input className='nav__input' type="text" />
        </form>
        <Link to='/' className='nav__logo'>fakeShop</Link>
        <div className="nav__icons">
          <BsCart3 size={20}/>
          <VscAccount size={20}/>
          <AiOutlineMenu className='nav__hamburger' size={20} onClick={() => setIsOpen(prev => !prev)}/>
        </div>
      </div>
      <div className="nav__categories">
        <ul className='nav__list'>
          <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
          <li className="nav__item"><NavLink to='/products/men'>Men</NavLink></li>
          <li className="nav__item"><NavLink to='/products/women'>Women</NavLink></li>
          <li className="nav__item"><NavLink to='/products/collection'>Collection</NavLink></li>
          <li className="nav__item"><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
      </div>
      {isOpen && <div className="nav__categories-mobile">
        <ul className='nav__list-mobile'>
          <li className="nav__item-mobile"><NavLink to='/'>Home</NavLink></li>
          <li className="nav__item-mobile"><NavLink to='/products/men'>Men</NavLink></li>
          <li className="nav__item-mobile"><NavLink to='/products/women'>Women</NavLink></li>
          <li className="nav__item-mobile"><NavLink to='/products/collection'>Collection</NavLink></li>
          <li className="nav__item-mobile"><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
      </div>}
    </nav>
  )
}

export default Nav