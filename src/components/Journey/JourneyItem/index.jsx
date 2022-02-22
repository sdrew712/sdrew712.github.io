import "./index.css";

const JourneyItem = ({ title, location, dates, details }) => {
  return (
    <div className="journey-item">
      <div className="journey-title-container">
        <h2 className="journey-title">{title}&nbsp;</h2>
        <h2 className="pop-text journey-title">{location}</h2>
      </div>
      <p className="date">{dates}</p>
      <ul>
        {details?.map((detail, index) => (
          <li className="detail" key={index}>
            <span className="pop-text triangle">▹</span>
            <span key={index}>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JourneyItem;
