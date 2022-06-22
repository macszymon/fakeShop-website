import React from 'react';
import { Link } from 'react-router-dom';
import './BigSales.css';

function BigSales() {
  return (
    <section className='sales'>
      <h2 className='sales__title'>Spring 22</h2>
      <h3 className='sales__festival'>Big Fashion Festival</h3>
      <h3 className='sales__off'>
        40%-50% <span>off</span>
      </h3>
      <Link to='/products/sale/all' className='sales__btn'>
        Shop now
      </Link>
    </section>
  );
}

export default BigSales;
