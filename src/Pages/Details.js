import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../data';
import './Details.css'

function Details() {
  let { id } = useParams();
  const [product] = data.filter(item => item.id == id)

  return (
    <main className='details'>
      {product.name}
    </main>
  )
}

export default Details