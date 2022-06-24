import React from 'react'
import './Cart.css'
import CartCard from './CartCard'

function Cart({cart, setCart}) {
  return (
    <main className='cart'>
      <div className="cart__cards">
      {cart.map(item => <CartCard item={item}/>)}
      </div>
      </main>
  )
}

export default Cart