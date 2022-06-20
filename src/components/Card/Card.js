import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import './Card.css'
import data from '../../data'

function Card() {
  return (
    <div className="card">
      <img className='card__img' src={data[10].img}/>
      <div className="card__text">
        <div className="left">
        <h3 className="card__title">
        {data[0].name}
        </h3>
        <div className="card__rating">
          <AiFillStar size={18}/>
          <span>3.9 &#8901; 120 revies</span>
        </div>
        </div>
        <div className="right">
        <h4 className="card__price">109.95$</h4>
        </div>
      </div>
      <button className="card__add">Add to cart</button>
    </div>
  )
}

export default Card