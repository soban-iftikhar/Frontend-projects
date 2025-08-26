import React from "react";


const WelcomeSection = () => {
  const points = [
    "Inspected Cars",
    "Hassle-Free Buying",
    "Pre-Inspected Cars",
  ];

  return (
    <div className="welcome-container">
  
      <div className="welcome-text">
        <p className="small-heading">
          Only On <span className="highlight">RON'S AUTOMOTIVE</span>
        </p>
        <h2>Welcome to Ron's Automotive</h2>
        <h4>Looking for best deals?</h4>
        <p className="highlight-text">
          You are on <span className="highlight">the right place</span>
        </p>

        <hr />

        <p className="description">
          We offer reasonable auto pricing and leasing plans, insurance
          packages for a greater experience.
        </p>

        <div className="points-list">
          {points.map((point, i) => (
            <div className="point" key={i}>
              <div className="number">{i + 1}</div>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

    
      <div className="welcome-image">
        <img src="welcome.png" alt="Welcome" />
      </div>
    </div>
  );
};

export default WelcomeSection;
