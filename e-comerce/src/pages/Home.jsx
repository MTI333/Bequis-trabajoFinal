import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/productsData';  

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Productos Destacados</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;