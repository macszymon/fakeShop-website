import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import { Routes, Route } from 'react-router-dom';
import Error from './Pages/Error';

function App() {
  return (
    <>
      <div className='open'></div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/:category/:type' element={<Products />} />
        <Route path='product/:id' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
