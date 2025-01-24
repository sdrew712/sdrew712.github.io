import Headroom from "react-headroom";
import "./index.css";

const NavBar = () => {
  return (
    <Headroom>
      <nav id="nav-bar">
        <a href="#sarah" name="sarah" id="sarah">
          Sarah
        </a>

        <div>
          <a href="#projects" className="nav-item-right" name="projects">
            Projects
          </a>
          <a href="#journey" className="nav-item-right" name="journey">
            Journey
          </a>
          <a href="#contact" className="nav-item-right" name="contact">
            Contact
          </a>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
