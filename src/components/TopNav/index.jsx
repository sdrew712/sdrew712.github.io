import React from "react";
import Headroom from "react-headroom";
import "./index.css";

const TopNav = () => {
  return (
    <Headroom>
      <div id="top-nav">
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
      </div>
    </Headroom>
  );
};

export default TopNav;
