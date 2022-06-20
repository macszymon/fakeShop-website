import React from 'react'
import './Features.css'
import FeaturesCard from './FeaturesCard'
import {BsCheck2Circle, BsTruck} from 'react-icons/bs'
import {VscPackage} from 'react-icons/vsc'
import {TbSeeding} from 'react-icons/tb'

function Features() {
  return (
    <section className="features">
      <h2 className='features__header'>Customer on the first place</h2>
      <div className="features__cards">
      <FeaturesCard icon={<BsTruck className='card__icon' size={24}/>} title='fast delivery'/>
      <FeaturesCard icon={<VscPackage className='card__icon' size={24}/>} title='easy return'/>
      <FeaturesCard icon={<BsCheck2Circle className='card__icon' size={24}/>} title='quality products'/>
      <FeaturesCard icon={<TbSeeding className='card__icon' size={24}/>} title='recycled packaging'/>
      </div>
    </section>
  )
}

export default Features