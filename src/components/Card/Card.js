import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import './Card.css'
import data from '../../data'

function Card({index}) {
  return (
    <div className="card">
      <img className='card__img' src={data[index].img}/>
      <div className="card__text">
        <h3 className="card__title">
        {data[index].name}
        <div className="card__rating">
          <AiFillStar className='card__star'/>
          <span>{data[index].rate} &#8901; {data[index].reviews} reviews</span>
        </div>
        </h3>
        <h4 className="card__price">{data[index].price}$</h4>
      </div>
      <button className="card__add">Add to cart</button>
    </div>
  )
}

export default Card