import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { products } from '../data/productsData';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-page">
      <div className="container">
        <ProductDetail product={product} />
      </div>
    </div>
  );
};

export default Product;