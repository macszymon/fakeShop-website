import React from 'react'

function FeaturesCard({title, icon }) {
  return (
    <div className='features-card'>
      {icon}
      <h3 className='features-card__title'>{title}</h3>
      <p className="features-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nobis!</p>
    </div>
  )
}

export default FeaturesCard