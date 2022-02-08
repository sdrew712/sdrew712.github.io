import React from "react";
import "./index.css";

const JourneyItem = ({ title, location, dates, details }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h2 className="pop-text">{location}</h2>
      </div>
      <div>{dates}</div>
      {details.map((detail, index) => (
        <div>
          <span>▹</span>
          <p key={index}>{detail}</p>
        </div>
      ))}
    </div>
  );
};

export default JourneyItem;
