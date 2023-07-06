import React from 'react';
import './Destinations.css';

const Destinations = () => {
  return (
    <div className="destination">
      <div className="popular-destinations">
    
        <div className="destination-card">
          <img src="https://cdn.britannica.com/24/94224-050-7D29C4E0/Skyline-Dallas-Texas.jpg" alt="Destination 1" />
          <h3>Dallas</h3>
        </div>
        <div className="destination-card">
          <img src="https://www.discoverlosangeles.com/sites/default/files/images/2019-01/skyline-downtown-3.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp" alt="Destination 2" />
          <h3>Los Angeles</h3>
        </div>
        <div className="destination-card">
          <img src="https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg" alt="Destination 3" />
          <h3>New York</h3>
        </div>
        <div className="destination-card">
          <img src="https://www.nationsonline.org/gallery/USA/San-Francisco-Oakland-Bay-Bridge.jpg" alt="Destination 3" />
          <h3>San Franciso</h3>
        </div>
        <div className="destination-card">
          <img src="https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel_16x9.jpg" alt="Destination 3" />
          <h3>Seattle</h3>
        </div>
        <div className="destination-card">
          <img src="https://www.tripsavvy.com/thmb/3vRx9CLH1xJfp9kUAsgZY-TLQuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/view-of-city-lit-up-at-night-743766201-5b61ee4dc9e77c00501f73e1.jpg" alt="Destination 3" />
          <h3>Miami</h3>
        </div>
      </div>
    </div>
  );
};

export default Destinations;