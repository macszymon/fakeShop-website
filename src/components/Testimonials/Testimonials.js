import React from 'react'
import './Testimonials.css'
import {AiFillStar} from 'react-icons/ai'


function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__card">
        <img className='testimonials__img' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
        <div className="testimonials__stars">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <p className='testimonials__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, mollitia maiores. Tempora soluta commodi debitis officia cum quasi totam porro ab. Aliquid, totam facilis. Magnam, at aliquam?</p>
      </div>
      <div className="testimonials__card">
        <img className='testimonials__img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <div className="testimonials__stars">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <p className='testimonials__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iste, quasi quidem sint id accusamus velit, aliquid alias accusantium possimus harum a pariatur?</p>
      </div>
      <div className="testimonials__card">
        <img className='testimonials__img' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
        <div className="testimonials__stars">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <p className='testimonials__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis dolores qui quam eligendi saepe, sed tempora numquam illum modi eaque reprehenderit animi tenetur ratione id rem, iure?</p>
      </div>
    </section>
  )
}

export default Testimonials