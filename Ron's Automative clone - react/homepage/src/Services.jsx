import React from "react";
import { FaCheckCircle, FaExchangeAlt, FaTools, FaCar, FaKey, FaDollarSign } from "react-icons/fa";

const Services = () => {
  const services = [
    { icon: <FaCheckCircle />, title: "Get Pre-Approved" },
    { icon: <FaExchangeAlt />, title: "Value Your Trade" },
    { icon: <FaTools />, title: "Schedule Service" },
    { icon: <FaCar />, title: "Schedule Test Drive" },
    { icon: <FaKey />, title: "Find My Car" },
    { icon: <FaDollarSign />, title: "Cars Under $15K" },
  ];

  return (
    <div className="services">
      <h1 className="services-title">Ron's Royal Services</h1>
      <p className="services-subtitle">
        "Get our comprehensive and hassle-free services. Click to find more."
      </p>

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{service.icon}</div>
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
