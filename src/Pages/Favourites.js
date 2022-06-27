import React from 'react'
import './Favourites.css'
import Card from '../components/Card/Card'

function Favourites({favourites}) {
  return (
    <main className='favourites'>
      <h2 className='favourites__header'>Favourites | {favourites.length} {favourites.length !== 1 ? 'items' : 'item'}</h2>
      {favourites.length > 0 ? <div className="favourites__cards">
      { favourites.map(item => <Card key={item.id} item={item}/>)}
      </div> : <h3 className='favourites__empty'>Do you want to add products to your Favorites? Just click the heart symbol on the product.</h3>}
      </main>
  )
}

export default Favourites