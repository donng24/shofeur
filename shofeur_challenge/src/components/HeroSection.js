import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-card">
        <h1>Welcome to <span className="highlight">s</span>hofeur</h1>
        <p>Book your chauffeured ride now!</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;