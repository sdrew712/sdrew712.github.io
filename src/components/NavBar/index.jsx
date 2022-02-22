import React from "react";
import Headroom from "react-headroom";
import "./index.css";

const NavBar = () => {
  return (
    <Headroom>
      <nav id="nav-bar">
        <a href="#sarah">Sarah</a>

        <div>
          <a href="#projects" className="nav-item-right">
            Projects
          </a>
          <a href="#journey" className="nav-item-right">
            Journey
          </a>
          <a href="#contact" className="nav-item-right">
            Contact
          </a>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
