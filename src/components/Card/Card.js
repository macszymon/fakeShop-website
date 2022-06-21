import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import './Card.css'

function Card({item}) {
  return (
    <div className="card">
      <img className='card__img' src={item.img}/>
      <div className="card__text">
        <h3 className="card__title">
        {item.name}
        <div className="card__rating">
          <AiFillStar className='card__star'/>
          <span>{item.rate} &#8901; {item.reviews} {item.reviews > 1 ? 'reviews' : 'review'}</span>
        </div>
        </h3>
        <h4 className="card__price">{item.price}$</h4>
      </div>

    </div>
  )
}

export default Card