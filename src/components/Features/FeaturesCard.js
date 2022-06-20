import React from 'react'

function FeaturesCard({title, icon }) {
  return (
    <div className='card'>
      {icon}
      <h3 className='card__title'>{title}</h3>
      <p className="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nobis!</p>
    </div>
  )
}

export default FeaturesCard