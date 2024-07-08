import React from 'react';
import ProductList from '../components/ProductList';
import '../styles.css';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div className="product-page">
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
