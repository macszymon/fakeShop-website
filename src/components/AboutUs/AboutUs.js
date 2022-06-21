import React from 'react'
import './AboutUs.css'
import img from '../../images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__text">
        <h2 className='about-us__header'>About Us</h2>
        <p className='about-us__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, error perspiciatis aspernatur quae explicabo eligendi atque. Corrupti a reiciendis distinctio debitis ut.</p>
        <button className="about-us__btn">Learn more</button>
      </div>
      <img src={img} alt="women standing" className="about-us__img" />
    </section>
  )
}

export default AboutUs