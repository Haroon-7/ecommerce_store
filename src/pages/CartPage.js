import React from 'react';
import Cart from '../components/Cart';
import '../CartPage.css';  // Import CartPage.css for styling
import '../styles.css';  // Import global styles if needed

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
