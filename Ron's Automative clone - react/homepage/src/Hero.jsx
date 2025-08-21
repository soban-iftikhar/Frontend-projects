import React from 'react'

const Hero = () => {

  const years = Array.from({ length: 2025 - 1990 + 1 }, (value, index) => 1990 + index)
  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
  const models = ["Corolla", "Civic", "Mustang", "3 Series", "C-Class"];
  const price = ["$10,000 - $20,000", "$20,000 - $30,000", "$30,000 - $40,000", "$40,000 - $50,000", "$50,000 - $100,000"];


  return (
    <>
      <div className="hero">
        <h1>Giving Life To Cars</h1>

        <div className='drop-down'>
          <select>
            <option value="year">Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select>
            <option value="make">Select Make</option>
            {makes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>

          <select>
            <option value="model">Select Model</option>
            {models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>

          <select>
            <option value="price">Select Price Range</option>
            {price.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <button >Select</button>
        </div>
      </div>
    </>
  )
}

export default Hero