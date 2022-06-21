import React from 'react';
import Hero from './../components/Hero/Hero';
import Features from './../components/Features/Features';
import AboutUs from './../components/AboutUs/AboutUs';
import Featured from '../components/Featured/Featured';
import Newsletter from './../components/Newsletter/Newsletter';

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Featured />
      <AboutUs />
      <Newsletter />
    </main>
  );
}

export default Home;
