import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import './Card.css';

function Card({ item }) {
  return (
    <Link to={'/product/' + item.id} className='card'>
      <img className='card__img' src={item.img} />
      <div className='card__text'>
        <h3 className='card__title'>
          {item.name}
          <div className='card__rating'>
            <AiOutlineStar className='card__star' />
            <h4>
              {item.rate} &#8901; {item.reviews}{' '}
              {item.reviews > 1 ? 'reviews' : 'review'}
            </h4>
          </div>
        </h3>
        {item.discount > 0 ? (
          <h3 className='card__price-new card__sale'>
            {Math.floor(item.price * item.discount)}${' '}
            <span className='card__old-price'>{item.price}$</span>
          </h3>
        ) : (
          <h3 className='card__price'>{item.price}$</h3>
        )}
      </div>
    </Link>
  );
}

export default Card;
