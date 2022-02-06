import React from "react";
import "./index.css";

const Header = ({ title }) => {
  return (
    <div id="header">
      <span id="line"></span>
      <h2 id="title">{title}</h2>
    </div>
  );
};

export default Header;
