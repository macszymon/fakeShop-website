import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="open"></div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<Products />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
