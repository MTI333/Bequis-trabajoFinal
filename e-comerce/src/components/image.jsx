import React, { useState } from 'react';

const Image = ({ src, alt, className, fallback = '/img/placeholder.jpg' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  const handleLoad = () => {
    console.log('Imagen cargada exitosamente:', src);
  };

  return (
    <img
      src={product.img}
      alt={product.name}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
    />
  );
};

export default Image;