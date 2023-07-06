import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VehicleCards from './components/VehicleCards';
import Footer from './components/Footer';
import Destinations from './components/Destinations';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <VehicleCards />
      <Destinations />
      <Footer />
    </div>
  );
};

export default App;