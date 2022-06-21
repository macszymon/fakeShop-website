import React, { useState } from 'react'
import './Nav.css'
import {IoIosSearch} from 'react-icons/io'
import {BsCart3} from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineMenu} from 'react-icons/ai'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='nav'>
      <div className="nav__main">
        <form className="nav__form">
          <IoIosSearch size={20}/>
          <input className='nav__input' type="text" />
        </form>
        <span className='nav__logo'>fakeShop</span>
        <div className="nav__icons">
          <BsCart3 size={20}/>
          <VscAccount size={20}/>
          <AiOutlineMenu className='nav__hamburger' size={20} onClick={() => setIsOpen(prev => !prev)}/>
        </div>
      </div>
      <div className="nav__categories">
        <ul className='nav__list'>
          <li className="nav__item"><a href='#'>All</a></li>
          <li className="nav__item"><a href='#'>Men</a></li>
          <li className="nav__item"><a href='#'>Women</a></li>
          <li className="nav__item"><a href='#'>New Collection</a></li>
        </ul>
      </div>
      {isOpen && <div className="nav__categories-mobile">
        <ul className='nav__list-mobile'>
          <li className="nav__item-mobile"><a href='#'>All</a></li>
          <li className="nav__item-mobile"><a href='#'>Men</a></li>
          <li className="nav__item-mobile"><a href='#'>Women</a></li>
          <li className="nav__item-mobile"><a href='#'>New Collection</a></li>
        </ul>
      </div>}
    </nav>
  )
}

export default Nav