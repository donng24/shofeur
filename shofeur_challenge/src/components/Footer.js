import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Vehicle Rental. All rights reserved.</p>
        <div className="social-links">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;