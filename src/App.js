import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import { Routes, Route } from 'react-router-dom';
import Favourites from './Pages/Favourites';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error';
import { useState } from 'react';

function App() {
  const [favourites, setFavourites] = useState(localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : [])
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  return (
    <>
      <div className='open'></div>
      <Nav cartItems={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/:category/:type' element={<Products />} />
        <Route path='product/:id' element={<Details cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='favourites' element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
