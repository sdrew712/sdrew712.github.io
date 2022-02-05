import React from "react";
import "./index.css";

const Sarah = () => {
  return (
    <div id="sarah">
      <p>Hi, I'm</p>
      <h1 className="pop-text" id="name">
        Sarah Drew
      </h1>
      <p>
        a <span className="pop-text">full-stack</span> developer & <span className="pop-text">creator.</span>
      </p>
      <p>
        I spend my time <span className="pop-text">skating,</span> writing <span className="pop-text">music,</span> and
        hacking on new <span className="pop-text">projects.</span>
      </p>
    </div>
  );
};

export default Sarah;
