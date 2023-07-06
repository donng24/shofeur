import React, { useRef } from 'react';
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
    {
      id: 5,
      name: 'Other',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$?/hr',
    },
    {
      id: 6,
      name: 'Other',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$?/hr',
    },
    {
      id: 7,
      name: 'Other',
      image: 'https://www.kbb.com/wp-content/uploads/2022/06/2022-chevrolet-suburban-front-right.jpg?w=757',
      price: '$?/hr',
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300, // Scroll 300px to the left
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300, // Scroll 300px to the right
      behavior: 'smooth',
    });
  };

  return (
    <div className="vehicle-cards-container">
      <button className="carousel-arrow left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="vehicle-cards" ref={carouselRef}>
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img src={vehicle.image} alt={vehicle.name} />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.price}</p>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default VehicleCards;