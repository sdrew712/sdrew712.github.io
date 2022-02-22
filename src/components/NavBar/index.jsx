import { useEffect } from "react";
import Headroom from "react-headroom";
import "./index.css";

const NavBar = ({ active }) => {
  useEffect(() => {
    const activeNavItem = document.getElementById("active");
    const navItemName = activeNavItem.name;
    activeNavItem.innerText = `<${activeNavItem.innerText} />`;
    return () => {
      activeNavItem.innerText =
        navItemName[0].toUpperCase() + navItemName.slice(1);
    };
  }, [active]);

  return (
    <Headroom>
      <nav id="nav-bar">
        <a href="#sarah" name="sarah" id={active === "sarah" ? "active" : ""}>
          Sarah
        </a>

        <div>
          <a
            href="#projects"
            className="nav-item-right"
            name="projects"
            id={active === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#journey"
            className="nav-item-right"
            name="journey"
            id={active === "journey" ? "active" : ""}
          >
            Journey
          </a>
          <a
            href="#contact"
            className="nav-item-right"
            name="contact"
            id={active === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
