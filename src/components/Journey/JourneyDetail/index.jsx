import "./index.css";

const JourneyDetail = ({ children }) => {
  return (
    <li className="detail">
      <span className="pop-text triangle">▹</span>
      {children}
    </li>
  );
};

export default JourneyDetail;
