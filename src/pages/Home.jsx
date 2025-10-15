import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Needy from '../components/Needy';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Hero />
        <Needy />
        <Categories />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Home;
