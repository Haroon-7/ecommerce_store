import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> {/* Link to the homepage */}
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
