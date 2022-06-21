import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';
import Collection from './components/Collection/Collection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="open"></div>
      <Nav/>
      <Hero/>
      <Features/>
      <Collection/>
      <AboutUs/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
