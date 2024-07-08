import React from 'react';
import '../styles/HomePage.css'; // Import HomePage.css for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="about-section">
        <h2>About Us</h2>
        <p>Welcome to our store! We specialize in providing high-quality tech gadgets and accessories to tech enthusiasts worldwide. Our mission is to offer cutting-edge products that enhance your digital lifestyle, from smartphones and laptops to smart home devices and more.</p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a question or need assistances? Feel free to reach out to us:</p>
        <ul>
          <li>Email: mharoon0510@gmail.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: muktar aracade university of haripur road, Haripur, Pakistan</li>
        </ul>
      </section>

      <section className="store-info-section">
        <h2>Store Information</h2>
        <p>We are located in the heart of Tech City, open from Monday to Friday, 9 AM to 6 PM. Our store policies ensure a seamless shopping experience, including easy returns and dedicated customer support.</p>
      </section>
    </div>
  );
};

export default HomePage;
