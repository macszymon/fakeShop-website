import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../../data';
import { AiOutlineStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './Details.css'

function Details({favourites, setFavourites,cart, setCart}) {
  const [isFav, setIsFav] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [sizeCart, setSizeCart] = useState('')
  let { id } = useParams();
  const [product] = data.filter(item => item.id == id)
  let cartCopy = [...cart];
  let existingItem = cartCopy.find(cartItem => cartItem.id === product.id && cartItem.sizes === sizeCart);

  useEffect(() => {
    favourites.forEach(item => item.id === product.id && setIsFav(true))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(favourites))
  }, [favourites])

  function handleSubmit(e) {
    e.preventDefault()
    addToCart()
  }
  
  function addFav() {
    setFavourites(prev => [...prev,product])
    setIsFav(true)
  }
  
  function removeFav() {
    setFavourites(prev => prev.filter(item => item.id !== product.id))
    setIsFav(false)
  }

  function addToCart() {
    if (existingItem && existingItem.sizes === sizeCart) {
      existingItem.quantity += Number(quantity)
      setCart(cartCopy)
    } else if (existingItem && existingItem.sizes !== sizeCart) {
      setCart(prev => [...prev, {...product, quantity: Number(quantity), sizes: sizeCart}])
    } else {
      setCart(prev => [...prev, {...product, quantity: Number(quantity), sizes: sizeCart}])
    }
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <main className='details'>
      <img src={product.img} alt="" className="details__img" />
      <div className="details__text">
        <h2 className='details__title'>{product.name} {!isFav ? <AiOutlineHeart className='icon' size={32} onClick={addFav}/> : <AiFillHeart className='icon' size={32} style={{fill: '#C9002E'}} onClick={removeFav}/>}</h2>
          <div className='details__rating'>
            <AiOutlineStar className='details__star' />
            <h4>
              {product.rate} &#8901; {product.reviews}{' '}
              {product.reviews > 1 ? 'reviews' : 'review'}
            </h4>
          </div>
        {product.discount > 0 ? (
          <h3 className='details__price details__price-new card__sale'>
            {Math.floor(product.price * product.discount)}${' '}
            <span className='details__old-price'>{product.price}$</span>{' '}
          </h3>
        ) : (
          <h3 className='details__price'>{product.price}$</h3>
        )}
          <p className="details__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum quisquam eaque sed provident neque, sunt exercitationem? Rem recusandae explicabo est incidunt nulla voluptatem error?</p>
          <ul className="details__fabric">
            <span>Made of: </span>
            {product.fabric.map(item => <li key={item} >{item}</li>)}
          </ul>
          <form className='details__form' onSubmit={(e) => handleSubmit(e)}>
            <div className="details__sizes">
              <span>Choose size: </span>
            {product.sizes.map(size =><label className='details__label' key={size}><input required type="radio" name='size' id={size} value={size} onChange={(e) => setSizeCart(e.target.value)} /><span>{size}</span></label> )}
            </div>
            <button className="details__add">Add to cart</button>
            <input className='details__quantity' type="number" name="quantity" min={1} max={20} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          </form>
      </div>
    </main>
  )
}

export default Details