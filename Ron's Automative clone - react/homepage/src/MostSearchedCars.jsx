import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaCarSide, FaTachometerAlt, FaCogs, FaTint } from "react-icons/fa";

const MostSearchedCars = () => {

  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, slidesToScroll: 1 });
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

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

  return (
    <div className="most-searched">
      <h1>Most Searched Cars</h1>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {cars.map((car, i) => (
              <div className="embla__slide car-card" key={i}>
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
                  <a href="#" className="details-link">
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn left" onClick={scrollPrev}>
          &lt;
        </button>
        <button className="nav-btn right" onClick={scrollNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
