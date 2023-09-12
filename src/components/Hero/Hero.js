import React from 'react';
import './Hero.css';
import img2 from '../../images/emma-harrisova-QegmyFbXvTw-unsplash.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero'>
      <img className='hero__img' src={img2} alt='' />
      <div className='hero__text'>
        <h1 className='hero__header'>
          Clothes for people who love quality and premium products
        </h1>
        <h2 className='hero__discount'>
          20%-30% <span>off</span>
        </h2>
        <h2 className='hero__subheader'>Shop the new Summer colection</h2>
        <Link to='/products/both/all/collection' className='hero__btn'>
          View collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
