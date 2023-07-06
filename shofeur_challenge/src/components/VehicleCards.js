import React from 'react';
import './VehicleCards.css';

const VehicleCards = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Luxury Sedan',
      image: "https://cfx-wp-images.imgix.net/2022/05/2022-Genesis-G80.jpeg?auto=compress%2Cformat&ixlib=php-3.3.0&s=7138c93eae399a4bd1766860d420c444",
      price: '$100/hr',
    },
    {
      id: 2,
      name: 'SUV',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$100/hr',
    },
    {
      id: 3,
      name: 'Limo',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$100/hr',
    },
    {
      id: 4,
      name: 'Other',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$?/hr',
    },
    // Add more vehicle objects as needed
  ];

  return (
    <div className="vehicle-cards">
      {vehicles.map((vehicle) => (
        <div className="vehicle-card" key={vehicle.id}>
          <img src={vehicle.image} alt={vehicle.name} />
          <h3>{vehicle.name}</h3>
          <p>{vehicle.price}</p>
          <button>Rent Now</button>
        </div>
      ))}
    </div>
  );
};

export default VehicleCards;