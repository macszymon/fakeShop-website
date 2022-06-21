import React from 'react';
import Hero from './../components/Hero/Hero';
import BestSelling from '../components/BestSelling/BestSelling';
import Features from './../components/Features/Features';
import Featured from '../components/Featured/Featured';
import BigSales from '../components/BigSales/BigSales';
import Testimonials from '../components/Testimonials/Testimonials';
import AboutUs from './../components/AboutUs/AboutUs';
import Newsletter from './../components/Newsletter/Newsletter';

function Home() {
  return (
    <main>
      <Hero />
      <BestSelling/>
      <Features />
      <Featured />
      <BigSales/>
      <Testimonials/>
      <AboutUs />
      <Newsletter />
    </main>
  );
}

export default Home;
