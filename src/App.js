import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <div className="open"></div>
      <Nav/>
      <Hero/>
      <Trending/>
      <Features/>
      <AboutUs/>
    </div>
  );
}

export default App;
