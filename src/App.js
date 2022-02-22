import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import NavBar from "./components/NavBar";
import Sarah from "./components/Sarah";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("sarah");

  function changeVisible(isVisible, section) {
    if (isVisible) {
      setActive(section);
    }
    // handle case for switch sections when scrolling up
    // because the sensor component either detects elements
    // completely in view, or based off offset from top of elements.
    // this handles switching 'active' sections when scrolling up into
    // sections that stretch past the screen height (specifically on Mobile)
    else if (!isVisible) {
      switch (section) {
        case "projects":
          if (active === "projects") setActive("sarah");
          break;
        case "journey":
          if (active === "journey") setActive("projects");
          break;
        case "contact":
          if (active === "contact") setActive("journey");
          break;
        default:
      }
    }
  }

  return (
    <>
      <NavBar active={active} />

      <VisibilitySensor
        onChange={(isVisible) => changeVisible(isVisible, "sarah")}
      >
        <Sarah />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => changeVisible(isVisible, "projects")}
      >
        <Projects />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => changeVisible(isVisible, "journey")}
      >
        <Journey />
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => changeVisible(isVisible, "contact")}
      >
        <Contact />
      </VisibilitySensor>

      <Footer />
    </>
  );
}

export default App;
