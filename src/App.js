import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Details from './Pages/Details/Details';
import { Routes, Route } from 'react-router-dom';
import Favourites from './Pages/Favourites/Favourites';
import Cart from './Pages/Cart/Cart';
import Magazine from './Pages/Magazine/Magazine';
import Post from './Pages/Magazine/Post';
import Search from './Pages/Search/Search';
import Error from './Pages/Error/Error';
import Company from './Pages/Company/Company';
import { useState } from 'react';

function App() {
  const [favourites, setFavourites] = useState(localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : [])
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  return (
    <>
      <div className='open'></div>
      <Nav cartItems={cart.length} />
      <Routes>
        <Route path='./' element={<Home />} />
        <Route path='./products/:gender/:type' element={<Products />} />
        <Route path='./products/:gender/:type/:subtype' element={<Products />} />
        <Route path='./product/:id' element={<Details cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='./favourites' element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='./magazine' element={<Magazine/>} />
        <Route path='./magazine/post/:id' element={<Post/>} />
        <Route path='./cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='./search/:value' element={<Search/>} />
        <Route path='./company/:section' element={<Company />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
