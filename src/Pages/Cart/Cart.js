import React from 'react';
import './Cart.css';
import CartCard from './CartCard';

function Cart({ cart, setCart }) {
  let total = 0;
  let discount = 0;
  cart.forEach((item) => (total += item.price * item.quantity));
  cart.forEach(item => item.discount !== 0 ? discount +=item.price - Math.floor(item.price * (item.discount)) * item.quantity : discount += 0);

  return (
    <main className='cart'>
      <h2 className='cart__header'>Shopping cart</h2>
      <div className="cart__container">
      <div className='cart__cards'>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} cart={cart} setCart={setCart} />
        ))}
      </div>
      <div className='cart__summary'>
        <h2 className='cart__price-info'>Order value: <span>{total}$</span></h2>
        <h2 className='cart__price-info cart__price-info-discount'>Discount: <span>-{discount}$</span></h2>
        <h2 className='cart__price-info'>Shipping: <span>9.90$</span></h2>
        <h2 className='cart__total'>Total: <span>{total - discount + 9.9}$</span></h2>
        <button className='cart__checkout'>Go to checkout</button>
        <p>14 days withdrawal and free returns.</p>
      </div>
      </div>
    </main>
  );
}

export default Cart;
