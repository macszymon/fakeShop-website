import React from 'react'
import './Cart.css'
import CartCard from './CartCard'

function Cart({cart, setCart}) {
  return (
    <main className='cart'>
      <div className="cart__cards">
      {cart.map(item => <CartCard item={item} cart={cart} setCart={setCart}/>)}
      </div>
      <div className="cart__summary">
        <h2>Total</h2>
        <h2>124$</h2>
      </div>
      </main>
  )
}

export default Cart