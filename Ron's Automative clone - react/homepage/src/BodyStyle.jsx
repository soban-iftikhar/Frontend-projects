import React from 'react';

const BodyStyle = () => {
  const bodyStyles = [
    { name: "Sedan", img: "sedan.png" },
    { name: "Coupe", img: "coupe.png" },
    { name: "SUV", img: "SUV.png" },
    { name: "Truck", img: "truck.png" },
    { name: "Hatchback", img: "hatchback.png" },
    { name: "Minivan", img: "minivan.png" }
  ];

  return (
    <div className="body-style">
      <h1> Select A Body Style </h1>

      <div className="body-grid">
        {bodyStyles.map((style) => (
          <div className="card" key={style.name}>
            <img src={style.img} alt={style.name} />
            <div className="card-footer">{style.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyStyle;
