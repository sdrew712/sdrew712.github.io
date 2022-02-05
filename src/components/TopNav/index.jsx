import React from "react";
import "./index.css";

const TopNav = () => {
  return (
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
  );
};

export default TopNav;
