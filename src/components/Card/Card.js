import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Card.css';

function Card({ item }) {
  return (
    <div className='card'>
      <img className='card__img' src={item.img} />
      <div className='card__text'>
        <h3 className='card__title'>
          {item.name}
          <div className='card__rating'>
            <AiFillStar className='card__star' />
            <h4>
              {item.rate} &#8901; {item.reviews}{' '}
              {item.reviews > 1 ? 'reviews' : 'review'}
            </h4>
          </div>
        </h3>
        {item.discount > 0 ? (
          <h4 className='card__price card__sale'>
            {Math.floor(item.price * item.discount)}${' '}
            <span className='card__old-price'>{item.price}$</span>{' '}
            <span className='card__discount'>
              ({Math.round((1 - item.discount) * 100)}% off)
            </span>{' '}
          </h4>
        ) : (
          <h4 className='card__price'>{item.price}$</h4>
        )}
      </div>
    </div>
  );
}

export default Card;
