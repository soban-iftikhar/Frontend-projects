import React from "react";
import { FaUserFriends, FaSmile, FaUsers, FaHeartbeat } from "react-icons/fa";


const StatsSection = () => {
  const stats = [
    { icon: <FaUserFriends />, number: "1500+", text: "Gave Insurances" },
    { icon: <FaSmile />, number: "1200+", text: "Satisfied Customers" },
    { icon: <FaUsers />, number: "50+", text: "Professional Team" },
    { icon: <FaHeartbeat />, number: "97%", text: "Success Rate" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, i) => (
        <div className="stat-card" key={i}>
          <div className="icon-circle">{stat.icon}</div>
          <h3>{stat.number}</h3>
          <p>{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
