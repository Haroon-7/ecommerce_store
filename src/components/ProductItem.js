import React from 'react';
import '../styles.css';

const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Ensure addToCart is invoked correctly
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
