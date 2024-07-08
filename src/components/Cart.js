import React from 'react';
import '../styles.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);  // Call removeFromCart with the item object
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <h2>Cart</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
