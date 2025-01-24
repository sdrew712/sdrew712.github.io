import Header from "../Header";
import JourneyItem from "./JourneyItem";
import "./index.css";

const Journey = () => {
  return (
    <section id="journey">
      <Header title="Journey" />
      <div id="journey-section">
        <JourneyItem
          title="Software Engineer"
          location="@ Sibi"
          dates="Nov 2021 - Now"
        >
          <p>
            Engineering products for our clients and manufacturers in the real
            estate sector
          </p>
        </JourneyItem>

        <JourneyItem
          title="Web Development"
          location="@ DevMountain"
          dates="July 2021 - Nov 2021"
        >
          <p>Software development bootcamp</p>
        </JourneyItem>
      </div>
    </section>
  );
};

export default Journey;
