import React from 'react';
import Image from './image';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Producto no encontrado</div>;
  }
console.log(product.img);
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.img} alt={product.name}/>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">
          {product.stock > 0 
            ? `En stock: ${product.stock} unidades` 
            : 'Agotado'}
        </p>
        <p className="product-code">Código: {product.code}</p>
        <p className="product-description">{product.description}</p>
        <button 
          className="btn-primary" 
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;