import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'; 
// Import HomePage component
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', description: 'High performance laptop with SSD storage', price: 1200 },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone with advanced camera features', price: 800 },
    { id: 3, name: 'Headphones', description: 'Wireless headphones with noise cancellation', price: 250 },
    { id: 4, name: 'Tablet', description: 'Compact tablet for work and entertainment', price: 600 },
    { id: 5, name: 'Smart Watch', description: 'Fitness tracker with heart rate monitor', price: 300 },
    { id: 6, name: 'Camera', description: 'Professional DSLR camera with multiple lenses', price: 1500 },
    { id: 7, name: 'Gaming Console', description: 'Next-gen gaming console with VR capability', price: 500 },
    { id: 8, name: 'Printer', description: 'Wireless printer for home and office use', price: 150 },
    { id: 9, name: 'External Hard Drive', description: 'Portable storage solution with fast transfer speeds', price: 120 },
    { id: 10, name: 'Wireless Router', description: 'High-speed router for seamless internet connectivity', price: 100 },
    { id: 11, name: 'Bluetooth Speaker', description: 'Waterproof Bluetooth speaker for outdoor use', price: 80 },
    { id: 12, name: 'Fitness Tracker', description: 'Activity tracker with sleep monitoring', price: 70 },
    { id: 13, name: 'Kitchen Blender', description: 'Powerful blender for smoothies and shakes', price: 90 },
    { id: 14, name: 'Electric Toothbrush', description: 'Smart toothbrush with multiple cleaning modes', price: 50 },
    { id: 15, name: 'Portable Charger', description: 'Compact charger for smartphones and tablets', price: 30 },
    { id: 16, name: 'Digital Scale', description: 'Precision digital scale for kitchen use', price: 40 },
    { id: 17, name: 'Smart Thermostat', description: 'Energy-saving thermostat with remote control', price: 120 },
    { id: 18, name: 'LED Desk Lamp', description: 'Adjustable LED lamp with brightness settings', price: 60 },
    { id: 19, name: 'Yoga Mat', description: 'Premium yoga mat for comfort and stability', price: 50 },
    { id: 20, name: 'Backpack', description: 'Durable backpack with laptop compartment', price: 80 },
  ];

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
          <Route path="/products" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
