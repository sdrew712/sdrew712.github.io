import React from "react";
import Header from "../Header";
import JourneyItem from "./JourneyItem";
import "./index.css";

const Journey = () => {
  return (
    <>
      <Header title="Journey" />
      <section className="journey">
        <JourneyItem
          title="Engineering Intern"
          location="@ Sibi"
          dates="Nov 2021 - Present"
          details={[
            "Facilitate connections between manufacturers and clients through the Sibi platform",
            "Work with team to develope user authorization and authentication infratructure",
            "Write and review React code with Next JS",
            "Utilize Cypress and Jest to automate testing in CI/CD process",
          ]}
        />

        <JourneyItem
          title="Web Development"
          location="@ DevMountain"
          dates="July 2021- Nov 2021"
          details={[
            "Pair programmed daily to complete coding exercises and projects",
            "Developed full stack applications using Express as a backend, React as a frontend, and PostgreSQL as a database",
            "Built final project, an ecommerce website, with React and the Stripe API ",
          ]}
        />
      </section>
    </>
  );
};

export default Journey;
