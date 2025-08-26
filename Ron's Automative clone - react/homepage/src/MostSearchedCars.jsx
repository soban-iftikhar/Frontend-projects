import React, { useState } from "react";
import { FaCarSide, FaTachometerAlt, FaCogs, FaTint } from "react-icons/fa";


const MostSearchedCars = () => {
const cars = [
  {
    name: "BMW M5 Competition",
    price: "$120,000.00",
    img: "bmw.jpeg",
    specs: [
      { icon: <FaCarSide />, text: "Sedan" },
      { icon: <FaTachometerAlt />, text: "12,000 Miles" },
      { icon: <FaCogs />, text: "4.4L V8" },
      { icon: <FaTint />, text: "Black" },
    ],
  },
  {
    name: "Porsche 911 Carrera",
    price: "$135,500.00",
    img: "porsche.png",
    specs: [
      { icon: <FaCarSide />, text: "Coupe" },
      { icon: <FaTachometerAlt />, text: "8,500 Miles" },
      { icon: <FaCogs />, text: "3.0L H6" },
      { icon: <FaTint />, text: "Black" },
    ],
  },
  {
    name: "Nissan GT-R Premium",
    price: "$113,000.00",
    img: "nissan.jpg",
    specs: [
      { icon: <FaCarSide />, text: "Coupe" },
      { icon: <FaTachometerAlt />, text: "15,300 Miles" },
      { icon: <FaCogs />, text: "3.8L V6 Twin Turbo" },
      { icon: <FaTint />, text: "Black" },
    ],
  },
  {
    name: "Dodge Challenger SRT",
    price: "$95,200.00",
    img: "dodge.png",
    specs: [
      { icon: <FaCarSide />, text: "Coupe" },
      { icon: <FaTachometerAlt />, text: "9,200 Miles" },
      { icon: <FaCogs />, text: "6.2L V8 Supercharged" },
      { icon: <FaTint />, text: "Black" },
    ],
  },
];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cars.length);
  const prev = () => setIndex((prev) => (prev - 1 + cars.length) % cars.length);

  const visibleCars = [
    cars[index],
    cars[(index + 1) % cars.length]
  ];

  return (
    <div className="most-searched">
      <h1>Most Searched Cars</h1>

      <div className="slider-container">
        <button className="nav-btn left" onClick={prev}>&lt;</button>

        <div className="slider">
          {visibleCars.map((car, i) => (
            <div className="car-card" key={i}>
              <img src={car.img} alt={car.name} className="car-image" />
              <div className="car-info">
                <h2>{car.name}</h2>
                <p className="price">{car.price}</p>
                <button className="buy-btn">Buy Now</button>
                <div className="specs">
                  {car.specs.map((spec, j) => (
                    <div className="spec" key={j}>
                      <span className="icon">{spec.icon}</span>
                      <span>{spec.text}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="details-link">View Details →</a>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
