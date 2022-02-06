import React from "react";
import "./index.css";

const ProjectCard = ({ image, alt, title, description, tags }) => {
  const divImage = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div id="project-card" style={divImage}>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
      <div>View on GitHub</div>
    </div>
  );
};

export default ProjectCard;
