import React from "react";
import { FaCarSide, FaChair } from "react-icons/fa";


const ScheduleTestDrive = () => {
  const features = [
    { icon: <FaChair />, text: "Test Drive Experience" },
    { icon: <FaCarSide />, text: "Drive Before You Buy" },
  ];

  return (
    <div className="schedule-container">
      <h2 className="section-title">Schedule Test Drive</h2>

      <div className="content">
 
        <div className="image-section">
          <img src="driving.png" alt="Test drive" />
        </div>

        <div className="text-section">
          <h3>Schedule Test Drive with us</h3>
          <p>
            We welcome you to our inventory. Choose your dream car. Sit behind
            and enjoy the ride. Discover the features and observe the
            performance. You just fill out the form and we will contact you.
          </p>

          <h4 className="highlight">Want to test drive your dream car?</h4>

          <div className="features">
            {features.map((item, i) => (
              <div className="feature" key={i}>
                <div className="icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn">Schedule Test Drive →</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTestDrive;
