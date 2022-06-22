import React from 'react'
import Card from '../Card/Card';
import data from '../../data';
import { Link } from "react-router-dom";
import './BestSelling.css'

function BestSelling() {
  const filteredData = data.filter(item => item.isBestseller === true)


  return (
    <section className="best-selling">
      <div className="best-selling__header">
      <h2 className='best-selling__title'>Bestsellers</h2>
      <Link to='/products/bestsellers/all' className='collection__btn'>See more</Link>
      </div>
      <div className="collection__cards">
        <Card item={filteredData[0]} />
        <Card item={filteredData[1]} />
        <Card item={filteredData[2]} />
        <Card item={filteredData[3]} />
      </div>
    </section>
  )
}

export default BestSelling