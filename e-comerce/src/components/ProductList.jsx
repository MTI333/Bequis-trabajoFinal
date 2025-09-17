import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="stock">Disponibles: {product.stock}</p>
          <Link to={`/product/${product.id}`} className="btn-primary">
            Ver Detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;