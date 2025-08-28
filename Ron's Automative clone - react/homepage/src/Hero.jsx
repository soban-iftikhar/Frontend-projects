import React from 'react'

const Hero = () => {
  const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 1990 + i)
  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"]
  const models = ["Corolla", "Civic", "Mustang", "3 Series", "C-Class"]
  const price = [
    "$10,000 - $20,000",
    "$20,000 - $30,000",
    "$30,000 - $40,000",
    "$40,000 - $50,000",
    "$50,000 - $100,000"
  ]

  return (
    <div
      className="h-screen min-h-[500px] flex flex-col justify-between p-4 bg-[url('/car-hero.jpg')] bg-center bg-cover text-white relative"
    >

      <h1 className="text-6xl font-extrabold mt-8 text-center text-cyan-400 leading-tight">
        Giving Life To Cars
      </h1>


      <div className="bg-[rgb(240,248,255)] p-4 rounded-lg flex flex-row gap-2 justify-center mx-auto mb-8 max-w-[70%] w-full items-center">

        <select className="px-3 py-2 rounded-md border border-[#ccc] text-base bg-[rgba(238,238,238,0.84)] cursor-pointer text-black w-full">
          <option value="year">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select className="px-3 py-2 rounded-md border border-[#ccc] text-base bg-[rgba(238,238,238,0.84)] cursor-pointer text-black w-full">
          <option value="make">Select Make</option>
          {makes.map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <select className="px-3 py-2 rounded-md border border-[#ccc] text-base bg-[rgba(238,238,238,0.84)] cursor-pointer text-black w-full">
          <option value="model">Select Model</option>
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select className="px-3 py-2 rounded-md border border-[#ccc] text-base bg-[rgba(238,238,238,0.84)] cursor-pointer text-black w-full">
          <option value="price">Select Price Range</option>
          {price.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>

        <button className="px-6 py-2 rounded-md text-base bg-[#007cf0] text-white cursor-pointer transition-colors duration-300 w-full mt-2 hover:bg-[#006ad1]">
          Select
        </button>
      </div>
    </div>
  )
}

export default Hero
