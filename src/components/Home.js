import React from 'react';
import './HomeStyles.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
    </div>
  )
}

export default Home