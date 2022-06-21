import React from 'react'
import Card from '../Card/Card';
import data from '../../data';
import './BestSelling.css'

function BestSelling() {

  return (
    <section className="best-selling">
      <div className="best-selling__header">
      <h2 className='best-selling__title'>Best selling</h2>
      </div>
      <div className="collection__cards">
        <Card item={data[1]} />
        <Card item={data[6]} />
        <Card item={data[5]} />
        <Card item={data[7]} />
      </div>
    </section>
  )
}

export default BestSelling