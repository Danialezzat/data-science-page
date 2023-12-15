import React from 'react';
import './HomeStyles.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Pricing from './Pricing';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
    </div>
  )
}

export default Home