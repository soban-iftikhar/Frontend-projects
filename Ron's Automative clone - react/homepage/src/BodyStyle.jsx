import React from "react";

const BodyStyle = () => {
  const bodyStyles = [
    { name: "Sedan", img: "sedan.png" },
    { name: "Coupe", img: "coupe.png" },
    { name: "SUV", img: "SUV.png" },
    { name: "Truck", img: "truck.png" },
    { name: "Hatchback", img: "hatchback.png" },
    { name: "Minivan", img: "minivan.png" },
  ];

  return (
    <div className="py-8 px-4 bg-[#f8feff]">

      <h1 className="text-3xl mb-8 font-bold text-[#222] ">
        Select A Body Style
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 max-w-[1200px] mx-auto">
        {bodyStyles.map((style) => (
          <div
            key={style.name}
            className="bg-white shadow-md shadow-black/30 rounded-md overflow-hidden cursor-pointer flex flex-col justify-between h-[120px]"
          >
      
            <img
              src={style.img}
              alt={style.name}
              className="w-full h-[70px] object-contain bg-[#f9f9f9] p-2"
            />

            <div className="bg-[#42aaf0] text-white font-normal text-xs p-1.5 text-center">
              {style.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyStyle;
