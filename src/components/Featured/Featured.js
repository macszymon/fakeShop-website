import React from 'react'
import Card from '../Card/Card'
import './Featured.css'
import { Link } from "react-router-dom";
import data from '../../data';

function Collection() {
  const filteredData = data.filter(item => item.isFromNewCollection === true)

  return (
    <section className="collection">
      <div className="collection__header">
      <h2 className='collection__title'>From new collection</h2>
      <Link to='/products/collection/all' className='collection__btn'>See more</Link>
      </div>
      <div className="collection__cards">
        <Card item={filteredData[5]} />
        <Card item={filteredData[7]} />
        <Card item={filteredData[1]} />
        <Card item={filteredData[4]} />
      </div>
    </section>
  )
}

export default Collection