import React from 'react'
import Card from '../Card/Card'
import './Collection.css'

function Collection() {
  return (
    <section className="collection">
      <div className="collection__header">
      <h2 className='collection__title'>Featured from new collection</h2>
      <button className='collection__btn'>See full collection</button>
      </div>
      <div className="collection__cards">
        <Card index={3}/>
        <Card index={5}/>
        <Card index={9}/>
        <Card index={4}/>
      </div>
    </section>
  )
}

export default Collection