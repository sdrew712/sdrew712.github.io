import React from "react";
import "./index.css";

const ProjectCard = ({ image, alt, title, description, tags }) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
      <div>View on GitHub</div>
    </div>
  );
};

export default ProjectCard;
