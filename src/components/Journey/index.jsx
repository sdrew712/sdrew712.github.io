import Header from "../Header";
import JourneyItem from "./JourneyItem";
import "./index.css";

const Journey = () => {
  return (
    <section id="journey">
      <Header title="Journey" />
      <div id="journey-section">
        <JourneyItem
          title="Engineer"
          location="@ Sibi"
          dates="Nov 2021 - Present"
        >
          <p>
            Facilitate connections between manufacturers and clients through the
            Sibi platform
          </p>
          <p>
            Collaborate with team to develop
            <span className="pop-text"> authorization</span> and
            <span className="pop-text"> authentication </span>
            infrastructure
          </p>
          <p>
            Write and review code for
            <span className="pop-text"> Next JS </span>platform
          </p>
          <p>
            Manage database using <span className="pop-text">Prisma</span>
          </p>
          <p>
            Utilize <span className="pop-text">Cypress </span> and
            <span className="pop-text"> Jest </span> to automate testing in
            <span className="pop-text"> CI/CD </span> process
          </p>
        </JourneyItem>

        <JourneyItem
          title="Web Development"
          location="@ DevMountain"
          dates="July 2021 - Nov 2021"
        >
          <p>Pair programmed daily to complete coding exercises and projects</p>
          <p>
            Developed full stack applications using
            <span className="pop-text"> Express </span> as a backend,
            <span className="pop-text"> React </span>as a frontend, and
            <span className="pop-text"> PostgreSQL </span>as a database
          </p>
          <p>
            Built final project, an ecommerce website, with
            <span className="pop-text"> React </span> and the{" "}
            <span className="pop-text"> Stripe API</span>
          </p>
        </JourneyItem>
      </div>
    </section>
  );
};

export default Journey;
