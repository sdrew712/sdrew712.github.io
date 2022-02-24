import JourneyDetail from "../JourneyDetail";
import "./index.css";
import React from "react";

const JourneyItem = ({ title, location, dates, children }) => {
  return (
    <div className="journey-item">
      <div className="journey-title-container">
        <h2 className="journey-title">{title}&nbsp;</h2>
        <h2 className="pop-text journey-title">{location}</h2>
      </div>
      <p className="date">{dates}</p>
      <ul>
        {React.Children.map(children, (child) => (
          <JourneyDetail>{child}</JourneyDetail>
        ))}
      </ul>
    </div>
  );
};

export default JourneyItem;
