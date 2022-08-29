import React from 'react'
import './Newsletter.css'

function Newsletter() {

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="newsletter">
      <div className="newsletter__container">
      <h2 className='newsletter__header'>Sign up for the newsletter</h2>
      <p className="newsletter__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, animi odio dolores est totam aspernatur.</p>
      <form className="newsletter__form" onSubmit={(e) => handleSubmit(e)}>
      <input className='newsletter__input' type="email" placeholder='your@email.com' />
      <button className="newsletter__btn">Sign up</button>
      </form>
      </div>
    </section>
  )

}

export default Newsletter