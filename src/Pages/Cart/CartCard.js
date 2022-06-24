import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'

function CartCard({item}) {
  return (
    <div className='cart-card'>
      <Link to={'/product/' + item.id}>
      <img className='cart-card__img' src={item.img} />
      </Link>
      <div className='cart-card__text'>
        <h3 className='cart-card__title'>
          {item.name}
          <AiOutlineDelete size={24}/>
        </h3>
        {item.discount > 0 ? (
          <h3 className='cart-card__price-new cart-card__sale'>
            {Math.floor(item.price * item.discount)}${' '}
            <span className='cart-card__old-price'>{item.price}$</span>
          </h3>
        ) : (
          <h3 className='cart-card__price'>{item.price}$</h3>
        )}
        <div className="cart-card__info">
        <h4>Product id: {item.id}</h4>
        <h4>Size: {item.sizes}</h4>
        <h4>Total: {item.discount > 0 ? Math.floor(item.price * item.discount) * item.quantity : item.price * item.quantity}$</h4>
        <h4>Quantity: {item.quantity }</h4>
        </div>
      </div>
    </div>
  )
}

export default CartCard