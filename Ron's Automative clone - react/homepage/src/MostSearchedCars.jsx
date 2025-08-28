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
    <div className="py-8 px-4 bg-[#f4fafa]">
      <h1 className="text-3xl mb-6 font-bold ">Most Searched Cars</h1>

      <div className="relative max-w-[1000px] mx-auto">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-8">
            {cars.map((car, i) => (
              <div className="flex-[0_0_50%] min-w-0 flex" key={i}>
           
                <div className="w-full bg-white rounded-xl shadow-lg shadow-black/10 min-h-[500px] flex flex-col overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-[200px] object-cover rounded-t-xl"
                  />
                  <div className="flex flex-col h-full">
                    <h2 className="bg-blue-500 text-white px-3 py-2 text-base font-semibold">
                      {car.name}
                    </h2>
                    <p className="font-bold text-lg px-4 py-3 text-left">{car.price}</p>

                    <button className="bg-blue-500 text-white rounded-md px-3 py-2 text-sm ml-auto mr-4 mb-4 -mt-10 hover:bg-blue-600 transition">
                      Buy Now
                    </button>

                    <div className="grid grid-cols-4 gap-2 px-4 py-3 border-y border-gray-200 text-[0.6rem] text-gray-800">
                      {car.specs.map((spec, j) => (
                        <div key={j} className="flex flex-col items-center text-center">
                          <span className="text-xl text-blue-500 mb-1">{spec.icon}</span>
                          <span>{spec.text}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="text-blue-500 text-sm px-4 py-3 mt-auto flex justify-end"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 left-[-3rem] bg-blue-500 text-white rounded-full px-3 py-2 text-xl hover:bg-blue-600 transition z-10 max-md:left-2"
        >
          &lt;
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 right-[-3rem] bg-blue-500 text-white rounded-full px-3 py-2 text-xl hover:bg-blue-600 transition z-10 max-md:right-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
